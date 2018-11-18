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
}
