import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PopupService {
    popup = new Subject<any>();

    constructor() { }
}
