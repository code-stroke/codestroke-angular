import { Injectable } from '@angular/core';
import { Router, RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { HeaderService } from './header.service';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {
    loadingState = new BehaviorSubject<boolean>(false);

    constructor(private router: Router, private hs : HeaderService) {
        this.router.events.subscribe((event: RouterEvent) => {
            this.interceptNav(event)
        })
    }

    private interceptNav(event) {
        if (event instanceof NavigationStart) {
            this.loadingState.next(true);
            this.hs.hideMenu();
            return;
        }

        if (event instanceof NavigationEnd ||
            event instanceof NavigationCancel ||
            event instanceof NavigationError) {
            this.loadingState.next(false);
        }
    }

    public showLoading() {
        this.loadingState.next(true);
    }

    public hideLoading() {
        this.loadingState.next(false);
    }
}
