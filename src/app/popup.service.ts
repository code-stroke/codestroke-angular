import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OverlayService } from './overlay.service';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
    popup = new BehaviorSubject<any>(false);

    constructor(public os: OverlayService) { }

    showPopup(pop) {
        this.os.showOverlay();
        this.popup.next(pop);
    }

    executePopup(func: any) {
        this.popup.next(false);
        this.os.hideOverlay();
        func();
    }
}
