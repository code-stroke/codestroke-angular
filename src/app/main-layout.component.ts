import { Component, OnInit } from '@angular/core';
import {trigger, transition, style, animate, state} from '@angular/animations';

import { NotifService } from './notif.service';

@Component({
    selector: 'cs-main-layout',
    templateUrl: './main-layout.component.html',
    styleUrls: ['./main-layout.component.scss'],
    animations: [

        trigger(
            'notif',
            [
                transition(
                    ':enter', [
                        style({transform: 'translateY(100%)', opacity: 0}),
                        animate('0.2s', style({transform: 'translateY(0)', 'opacity': 1}))
                    ]
                ),
                transition(
                    ':leave', [
                        style({transform: 'translateY(0)', 'opacity': 1}),
                        animate('0.2s', style({transform: 'translateY(100%)', 'opacity': 0}))
                    ]
                )
            ]
        )

    ]
})
export class MainLayoutComponent implements OnInit {
    notifs = [];

    constructor(private notifService : NotifService) { }

    ngOnInit() {
        this.notifService.addQueue.subscribe(notif => {
            this.notifs.push(notif);
        });

        this.notifService.deleteQueue.subscribe(val => {
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
                this.notifService.triggerDelete();
            }

        });
    }

    onNotifClick(id : string) {
        this.notifService.deleteNotif(id);
    }

}
