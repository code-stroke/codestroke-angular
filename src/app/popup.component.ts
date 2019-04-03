import { Component, OnInit } from '@angular/core';
import { PopupService } from './popup.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
    selector: 'cs-popup',
    templateUrl: './popup.component.html',
    styleUrls: ['./popup.component.scss'],
    animations: [
        trigger(
            'popup',
            [
                transition(
                    ':enter', [
                        style({opacity: 0}),
                        animate('0.3s', style({'opacity': 1}))
                    ]
                ),
                transition(
                    ':leave', [
                        style({'opacity': 1}),
                        animate('0.3s', style({'opacity': 0}))
                    ]
                )
            ]
        )
    ]
})
export class PopupComponent implements OnInit {

    constructor(public ps: PopupService) { }

    ngOnInit() {
    }

}
