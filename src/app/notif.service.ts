import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, timer } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class NotifService {
    // Time notification remains active in Miliseconds
    activeTime = 2000;

    addQueue = new Subject();
    deleteQueue = new Subject();
    triggerDeleteQueue = new Subject();

    constructor() {
        this.addQueue.subscribe(val => {
            this.triggerDeleteQueue.next(true);
        });

        this.triggerDeleteQueue.pipe(
            switchMap(val => timer(this.activeTime))
        ).subscribe(val => {
            this.deleteQueue.next(true);
        });
    }

    addNotif(notif : Notif) {
        notif.id = Guid.newGuid();
        this.addQueue.next(notif);
    }

    deleteNotif(id : string) {
        this.deleteQueue.next(true);
    }

    triggerDelete() {
        this.triggerDeleteQueue.next(true);
    }
}

interface Notif {
    id ?: string;
    type : "success"|"warning"|"error";
    html : string;
}

class Guid {
    static newGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    }
}
