import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class OneSignalService {
    OneSignal;

    bellState = new BehaviorSubject<string>("Disabled");
    states : "Disabled"|"Loading"|"Opted In"|"Opted Out";

    constructor() {
        // CHANGE THE SCOPE UNDER PARAM AND PATH WHEN HOSTING ON HOSPITAL SERVER
        this.OneSignal = window['OneSignal'] || [];
        this.OneSignal.SERVICE_WORKER_PARAM = { scope: environment.onesignal_service_worker_param };

        let os = this.OneSignal;
        let instance = this;
        os.push(() => {
            os.init(environment.onesignal_init);

            if (!os.isPushNotificationsSupported()) {
                console.log("[OneSignal]: Unsupported");
                instance.bellState.next("Disabled");
                return;
            }

            instance.onSubscriptionChange();

            os.on('subscriptionChange', function (isSubscribed) {

                instance.onSubscriptionChange();
            });
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

    onSubscriptionChange() {
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
    }
}
