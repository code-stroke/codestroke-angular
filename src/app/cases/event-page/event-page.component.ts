import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { BackendCaseService } from '../backend-case.service';

@Component({
    selector: 'cs-event-page',
    templateUrl: './event-page.component.html',
    styleUrls: ['./event-page.component.scss']
})
export class EventPageComponent implements OnInit {
    _events : BehaviorSubject<any[]>;

    constructor(private backendService : BackendCaseService,
                private route: ActivatedRoute,
                private router : Router) { }

    ngOnInit() {
        this._events = new BehaviorSubject(new Array<any>());
        this.route.data.subscribe((data : any) => {
            this._events.next(data.events);
        });
    }

    get events() {
        return this._events.value;
    }

    getClass(event : any) {
        return "event-row " + JSON.parse(event.event_metadata).status;
    }
}
