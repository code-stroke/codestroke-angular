import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { faBars, faBell, faBellSlash, faSignOutAlt, faPlus, faHome, faListAlt, faCog, faTimes } from '@fortawesome/free-solid-svg-icons';


import { HeaderService } from './header.service';
import { NotifService } from './notif.service';


@Component({
  selector: 'cs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    icon_bars = faBars;
    icon_bell = faBell;
    icon_bell_slash = faBellSlash;
    icon_signout = faSignOutAlt;
    icon_plus = faPlus;
    icon_list = faListAlt;
    icon_cog = faCog;
    icon_home = faHome;
    icon_times = faTimes;

    pushNotifActive: boolean = true;

    constructor(private hs : HeaderService,
                private route: ActivatedRoute,
                private router : Router,
                private notifs : NotifService,

            ) { }

    ngOnInit() {

        var that = this;
        var OneSignal = window['OneSignal'] || [];
        console.log("bell state is " + this.pushNotifActive)

         this.getSubscriptionState().then((state) => {
            if (state.isPushEnabled) {
                console.log(this.pushNotifActive)
                if (!that.pushNotifActive) {
                    console.log("button init state on");
                    that.pushNotifActive = !that.pushNotifActive;
                }
            } else {
                if (state.isOptedOut) {
                    OneSignal.push(function() {
                        OneSignal.setSubscription(true);
                    });
                    if (!that.pushNotifActive) {
                        console.log("button toggled on and onesignal activated");
                        that.pushNotifActive = !that.pushNotifActive;
                    }

                }
            }
        });

    }

    get active() {
        return this.hs.subscribeToMenu();
    }

    onClick() {
        this.hs.toggleMenu();
    }

    onMenuClick(option : string) {
        switch (option) {
            case "home":
                this.router.navigate([``]);
                break;
            case "new":
                this.router.navigate([`/cases/add/`]);
                break;
            default:
                this.notifs.addNotif({
                    type: "error",
                    html: `Unfortunately, this feature is not enabled yet.`
                });
        }
    }
    pushnotifClick(){
        var that = this;
        var OneSignal = window['OneSignal'] || [];
        console.log("bell state is " + this.pushNotifActive)

         this.getSubscriptionState().then((state) => {
            if (state.isPushEnabled) {
                console.log(this.pushNotifActive)
                OneSignal.push(function() {
                    OneSignal.setSubscription(false);
                });
                if (that.pushNotifActive) {
                    console.log("button toggled off");
                    that.pushNotifActive = !that.pushNotifActive;
                }
                console.log('user unsubscribed');
            } else {
                if (state.isOptedOut) {
                    OneSignal.push(function() {
                        OneSignal.setSubscription(true);
                    });
                    if (!that.pushNotifActive) {
                        console.log("button toggled on");
                        that.pushNotifActive = !that.pushNotifActive;
                    }
                    console.log('user subscribed')
                }
            }
        });

    }
    getSubscriptionState(){
        var OneSignal = window['OneSignal'] || [];
        return Promise.all([
          OneSignal.isPushNotificationsEnabled(),
          OneSignal.isOptedOut()
        ]).then(function(result) {
            var isPushEnabled = result[0];
            var isOptedOut = result[1];

            return {
                isPushEnabled: isPushEnabled,
                isOptedOut: isOptedOut
            };
        });
    }

}
