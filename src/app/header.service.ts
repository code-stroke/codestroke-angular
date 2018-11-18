import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { map, skip } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class HeaderService {
    private menuStatus;

    constructor() {
        this.menuStatus = new BehaviorSubject<boolean>(false);
    }

    public toggleMenu() {
        if (this.menuStatus.value) {
            this.menuStatus.next(false);
        } else {
            this.menuStatus.next(true);
        }
    }

    public hideMenu() {
        this.menuStatus.next(false);
    }

    public subscribeToMenu() {
        return this.menuStatus.asObservable();
    }
}
