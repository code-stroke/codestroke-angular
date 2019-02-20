import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class OneSignalService {
    OneSignal;

    bellState = new BehaviorSubject<string>("Disabled");
    states : "Disabled"|"Loading"|"Opted In"|"Opted Out";

    $subscriptionChange = new Subject<any>();
    $notificationDisplay = new Subject<any>();
    $notificationDismiss = new Subject<any>();
    $notificationOpen = new Subject<any>();

    constructor() {


        // CHANGE THE SCOPE UNDER PARAM AND PATH WHEN HOSTING ON HOSPITAL SERVER
        this.OneSignal = window['OneSignal'] || [];
        this.OneSignal.SERVICE_WORKER_PARAM = { scope: environment.onesignal_service_worker_param };

        this.subscribeSubscriptionChange();
        this.subscribeNotificationDisplay();
        this.subscribeNotificationDismiss();
        this.subscribeNotificationOpen();

        let os = this.OneSignal;
        let instance = this;
        os.push(() => {
            os.init(environment.onesignal_init);

            if (!os.isPushNotificationsSupported()) {
                console.log("[OneSignal]: Unsupported");
                instance.bellState.next("Disabled");
                return;
            }

            // Trigger an update of Subscription status
            instance.$subscriptionChange.next();

            os.on('subscriptionChange', function (isSubscribed) {
                instance.$subscriptionChange.next();
            });

            os.on('notificationDisplay', function(event) {
                instance.$notificationDisplay.next(event as OSNotification);
            });

            os.on('notificationDismiss', function(event) {
                instance.$notificationDismiss.next(event as OSNotification);
            });

            os.addListenerForNotificationOpened(function (data) {
                instance.$notificationOpen.next(data as OSNotification)
            });

            console.log("reached end");
        });


    }

    getSubscriptionState() {
        let os = this.OneSignal;

        return Promise.all([
            os.isPushNotificationsEnabled(),
            os.isOptedOut()
        ]).then(function(result) {
            let isPushEnabled = result[0];
            let isOptedOut = result[1];

            console.log(`[OneSignal]: isPushEnabled = ${isPushEnabled} | isOptedOut = ${isOptedOut}`);

            return {
                isPushEnabled: isPushEnabled,
                isOptedOut: isOptedOut
            };
        });
    }

    subscribeSubscriptionChange() {
        this.$subscriptionChange.subscribe(() => {

            this.getSubscriptionState().then((state) => {
                if (state.isPushEnabled) {
                    /* Subscribed */
                    this.bellState.next("Opted In");
                } else {
                    if (state.isOptedOut) {
                        /* Opted out*/
                        this.bellState.next("Opted Out");
                    } else {
                        /* Unsubscribed*/
                        this.bellState.next("Disabled");
                    }
                }
            });

        });
    }

    subscribeNotificationDisplay() {
        this.$notificationDisplay.subscribe((data) => {
            console.log("[OneSignal]: Notification displayed: " + JSON.stringify(data));
        });
    }

    subscribeNotificationDismiss() {
        this.$notificationDismiss.subscribe((data) => {
            console.log("[OneSignal]: Notification Dismissed: " + JSON.stringify(data));
        });
    }

    subscribeNotificationOpen() {
        let os = this.OneSignal;
        let instance = this;

        this.$notificationOpen.subscribe((data) => {
            // Need to re-register Listener everytime notification received
            // ^^According to the OneSignal spec: https://documentation.onesignal.com/docs/web-push-sdk#section--addlistenerfornotificationopened-
            os.push(() => {
                os.addListenerForNotificationOpened(function (data) {
                    this.$notificationOpen.next(data as OSNotification)
                });
            });

            console.log("[OneSignal]: Notification Opened: " + JSON.stringify(data));
        });
    }

    toggleSubscription() {
        this.bellState.next("Loading");

        let os = this.OneSignal;
        this.getSubscriptionState().then((state) => {
            os.getUserId().then((id) => {console.log(id)});

            if (state.isPushEnabled) {
                /* Subscribed, opt them out */
                os.setSubscription(false);
            } else {
                if (state.isOptedOut) {
                    /* Opted out, opt them back in */
                    os.setSubscription(true);
                } else {
                    /* Unsubscribed, subscribe them */
                    os.registerForPushNotifications();
                }
            }
        });
    }
}

interface OSNotification {
    id : string
    heading : string
    content : string
    data? : any
    url : string
    icon : string
    action? : string
}
