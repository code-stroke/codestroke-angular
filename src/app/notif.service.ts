import { Injectable } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { take, flatMap, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class NotifService {
    // Time notification remains active in Miliseconds
    ACTIVE_TIME = 3000;

    addQueue = new Subject();
    deleteQueue = new Subject();
    triggerDeleteQueue = new Subject();

    notifs = [];

    constructor() {

        // Ensures that the page updates when a notif is added
        this.addQueue.subscribe(notif => {
            this.notifs.push(notif);
        });

        // Every Notification has lifetime of {ACTIVE_TIME} unless clicked
        this.triggerDeleteQueue.pipe(
            flatMap((id) => {
                return timer(this.ACTIVE_TIME).pipe(map(() => id));
            })
        ).subscribe((id) => {
            this.deleteQueue.next(id);
        });

        // Deletes the Notif by its ID
        this.deleteQueue.subscribe(val => {
            let index = false;
            for (let i = 0; i < this.notifs.length; i++) {
                if (this.notifs[i].id == val) {
                    this.notifs.splice(i, 1);
                    break;
                }
            }
        });

        // For testing only
        /*let source = timer(1000,500);
        source.pipe(take(5)).subscribe((v) => {
            this.addNotif({
                type: "success",
                html: "blah blah" + v
            });
        });*/
    }

    public addNotif(notif : Notif) {
        notif.id = Guid.newGuid();
        this.addQueue.next(notif);
        this.triggerDeleteQueue.next(notif.id);
    }

    public deleteNotif(id : string) {
        this.deleteQueue.next(id);
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
