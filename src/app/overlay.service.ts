import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router, RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { HeaderService } from './header.service';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {
    overlayState = new BehaviorSubject<boolean>(false);

    constructor(private router: Router, private hs: HeaderService) {

    }


    public showOverlay() {
        this.overlayState.next(true);
    }

    public hideOverlay() {
        this.overlayState.next(false);
    }
}
