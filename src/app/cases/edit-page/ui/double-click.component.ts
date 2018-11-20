import { Component, OnInit, HostListener, Input } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
    selector: 'cs-double-click',
    templateUrl: './double-click.component.html',
    styleUrls: ['./double-click.component.scss'],
    animations: [
        trigger(
            'fadein',
            [
                state('active', style({ opacity: 1})),
                state('inactive', style({opacity: 0})),
                transition(
                    'inactive => active', [
                        animate('0.3s')
                    ]
                ),
                transition(
                    'active => inactive', [
                        animate('0.2s')
                    ]
                )
            ]
        ),
        trigger(
            'down',
            [
                state('start', style({ transform: 'translateY(0%)'})),
                state('end', style({ transform: 'translateY(100%)'})),
                transition(
                    'start => end', [
                        animate('4s')
                    ]
                ),
                transition(
                    'end => start', [
                        //animate('0s')
                    ]
                )
            ]
        ),
        trigger(
            'green',
            [
                state('active', style({ opacity : 1})),
                state('inactive', style({opacity: 0})),
                transition(
                    'inactive => active', [
                        animate('0.4s')
                    ]
                ),
                transition(
                    'active => inactive', [
                        animate('0.4s')
                    ]
                )
            ]
        )
    ]
})
export class DoubleClickComponent implements OnInit {
    @Input() func;

    active = "inactive";
    down = "start";
    green = "inactive";

    constructor() { }

    ngOnInit() {
    }

    @HostListener('click') onClick() {
        if (this.active == "inactive") {
            this.active = "active";
        } else {
            this.green = "active";
            this.func();
        }
    }

    fadeDone() {
        if (this.active == "active") {
            this.down = "end";
        } else {
            this.down = "start";
        }
    }

    downDone() {
        if (this.down == "end") {
            this.active = "inactive";
        }
    }

    greenDone() {
        if (this.green == "active") {
            this.green = "inactive";
            this.active = "inactive";
        }
    }
}
