import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EditStatusService {
    name = new BehaviorSubject<string>("");
    status = new BehaviorSubject<string>("");
    statusTime = new BehaviorSubject<any>("");
    lastWell = new BehaviorSubject<any>("");

    constructor() { }
}
