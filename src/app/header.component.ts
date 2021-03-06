import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { faBars, faBell, faSignOutAlt, faPlus, faHome, faListAlt, faCog, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faBell as faBellEmpty} from '@fortawesome/free-regular-svg-icons';


import { HeaderService } from './header.service';
import { NotifService } from './notif.service';
import { AuthService } from './auth.service';
import { OneSignalService } from './one-signal.service';


@Component({
  selector: 'cs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    icon_bars = faBars;
    icon_bell = faBell;
    icon_bell_empty = faBellEmpty;

    icon_signout = faSignOutAlt;
    icon_plus = faPlus;
    icon_list = faListAlt;
    icon_cog = faCog;
    icon_home = faHome;
    icon_times = faTimes;

    pushNotifActive: boolean = true;

    constructor(public hs : HeaderService,
                public route: ActivatedRoute,
                public router : Router,
                public notifs : NotifService,
                public auth : AuthService,
                public os : OneSignalService
            ) { }

    ngOnInit() {

    }

    onBellClick(event) {
        this.os.toggleSubscription();

        event.stopPropagation();
    }

    get active() {
        return this.hs.subscribeToMenu();
    }

    onClick(event) {
        this.hs.toggleMenu();

        // Stops the onClickOut() method being called
        event.stopPropagation();
    }

    onClickOut() {
        if (this.hs.getMenuStatus()) {
            this.hs.hideMenu();
        }
    }

    getMenuLink(option : string) {
        switch (option) {
            case "home":
                return '';
                break;
            case "new":
                return '/cases/add';
                break;
            case "events":
                return '/cases/events';
                break;
            case "logout":
                return '/login';
                break;
            default:
                return './';
        }
    }

    onMenuClick(option : string) {
        switch (option) {
            case "home":
                break;
            case "new":
                break;
            case "events":
                this.notifs.addNotif({
                    type: "warning",
                    html: `This feature is in Beta and still a work in progress.`
                });
                break;
            case "logout":
                this.auth.loginState.next(false);
                break;
            default:
                this.notifs.addNotif({
                    type: "error",
                    html: `Unfortunately, this feature is not enabled yet.`
                });
        }
    }

}
