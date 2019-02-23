import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faBellSlash } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import { LoadingService } from './loading.service';
import { NotifService } from './notif.service';
import { OneSignalService } from './one-signal.service';

import { environment } from 'src/environments/environment';



@Component({
    selector: 'cs-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [

        trigger(
            'notif',
            [
                transition(
                    ':enter', [
                        style({transform: 'translateY(20%)', opacity: 0}),
                        animate('0.3s', style({transform: 'translateY(0)', 'opacity': 1}))
                    ]
                ),
                transition(
                    ':leave', [
                        style({transform: 'translateY(0)', 'opacity': 1}),
                        animate('0.3s', style({transform: 'translateY(20%)', 'opacity': 0}))
                    ]
                )
            ]
        )

    ]
})
export class AppComponent implements OnInit {
    icon_bars = faBars;
    icon_bell_slash = faBellSlash;
    icon_signout = faSignOutAlt;

    // These Services are used in the Template only and SHOULD NOT be removed
    constructor(public loading : LoadingService,
                public notifService : NotifService,
                public oneSignal : OneSignalService) { }

    ngOnInit() {
    }
}
