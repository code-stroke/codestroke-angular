import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faBellSlash } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import { HeaderService } from './header.service';

@Component({
    selector: 'cs-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    icon_bars = faBars;
    icon_bell_slash = faBellSlash;
    icon_signout = faSignOutAlt;

    loading : boolean = false;

    constructor(private router: Router, private hs : HeaderService) {
        this.router.events.subscribe((event: RouterEvent) => {
            this.interceptNav(event)
        })
    }

    interceptNav(event) {
        if (event instanceof NavigationStart) {
            this.loading = true
            this.hs.hideMenu();
        }
        if (event instanceof NavigationEnd) {
            this.loading = false
        }

        // Set loading state to false in both of the below events to hide the spinner in case a request fails
        if (event instanceof NavigationCancel) {
          this.loading = false
        }
        if (event instanceof NavigationError) {
          this.loading = false
        }
    }

    ngOnInit() {

            var OneSignal = window['OneSignal'] || [];
            OneSignal.SERVICE_WORKER_PARAM = { scope: '/codestroke-angular/' };
            console.log("scope set");
            OneSignal.push(["init", {
              appId: "968844fa-98a8-4c65-9c5f-9e26c66410d4",
              autoRegister: true,
              allowLocalhostAsSecureOrigin: true,
              notifyButton: {
                enable: false,
              },
              path: '/codestroke-angular/',
            }]);
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
