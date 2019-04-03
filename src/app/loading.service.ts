import { Injectable } from '@angular/core';
import { Router, RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { HeaderService } from './header.service';
import { OverlayService } from './overlay.service';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {
    loadingState = new BehaviorSubject<boolean>(true);

    constructor(private router: Router,
                private hs: HeaderService,
                private os: OverlayService) {
        this.router.events.subscribe((event: RouterEvent) => {
            this.interceptNav(event);
        });
    }

    private interceptNav(event) {
        if (event instanceof NavigationStart) {
            this.showLoading();
            this.hs.hideMenu();
            return;
        }

        if (event instanceof NavigationEnd ||
            event instanceof NavigationCancel ||
            event instanceof NavigationError) {
            this.hideLoading();
        }
    }

    public showLoading() {
        this.os.showOverlay();
        this.loadingState.next(true);
    }

    public hideLoading() {
        this.os.hideOverlay();
        this.loadingState.next(false);
    }
}
