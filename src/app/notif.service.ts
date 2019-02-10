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

    notifs = [];

    constructor() {
        this.addQueue.subscribe(notif => {
            this.notifs.push(notif);
            this.triggerDeleteQueue.next(true);
        });

        this.triggerDeleteQueue.pipe(
            switchMap(val => timer(this.activeTime))
        ).subscribe(val => {
            this.deleteQueue.next(true);
        });

        this.deleteQueue.subscribe(val => {
            // If we are deleting a certain Notif with a specific ID
            if (typeof val === 'string') {
                let index = false;
                for (let i = 0; i < this.notifs.length; i++) {
                    if (this.notifs[i].id == val) {
                        this.notifs.splice(i, 1);
                        break;
                    }
                }

            // Else we are just deleting the most recent Notif
            } else {
                this.notifs.pop();
            }

            if (this.notifs.length > 0) {
                this.triggerDelete();
            }

        });
    }

    public addNotif(notif : Notif) {
        notif.id = Guid.newGuid();
        this.addQueue.next(notif);
    }

    public deleteNotif(id : string) {
        this.deleteQueue.next(id);
    }

    private triggerDelete() {
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
