import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faBellSlash } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import { LoadingService } from './loading.service';
import { NotifService } from './notif.service';

import { environment } from 'src/environments/environment';


@Component({
    selector: 'cs-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [

        trigger(
            'notif',
            [
                transition(
                    ':enter', [
                        style({transform: 'translateY(100%)', opacity: 0}),
                        animate('0.2s', style({transform: 'translateY(0)', 'opacity': 1}))
                    ]
                ),
                transition(
                    ':leave', [
                        style({transform: 'translateY(0)', 'opacity': 1}),
                        animate('0.2s', style({transform: 'translateY(100%)', 'opacity': 0}))
                    ]
                )
            ]
        )

    ]
})
export class AppComponent implements OnInit {
    icon_bars = faBars;
    icon_bell_slash = faBellSlash;
    icon_signout = faSignOutAlt;

    constructor(private loading : LoadingService, private notifService : NotifService) { }

    ngOnInit() {
        // CHANGE THE SCOPE UNDER PARAM AND PATH WHEN HOSTING ON HOSPITAL SERVER
        var OneSignal = window['OneSignal'] || [];
        //OneSignal.SERVICE_WORKER_PARAM = { scope: '/codestroke-angular/' };
        console.log("scope set");

        OneSignal.push(["init", environment.onesignal_init]);
        if ('serviceWorker' in navigator && 'PushManager' in window) {
            console.log('Service Worker and Push is supported')
        } else{
            console.warn('Push messaging is not supported');
        }
        console.log('OneSignal Initialized');

        OneSignal.push(function () {
            console.log('Register For Push');
            OneSignal.push(["registerForPushNotifications"])
        });
        OneSignal.push(function () {
            // Occurs when the user's subscription changes to a new value.
            OneSignal.on('subscriptionChange', function (isSubscribed) {
                console.log("The user's subscription state is now:", isSubscribed);
                OneSignal.getUserId().then(function (userId) {
                    console.log("User ID is", userId);
                });
            });
        });


    }
}
