import { LoadingService } from './../../../loading.service';
import { BackendCaseService } from './../../backend-case.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { faSearch, faArrowLeft, faArrowRight, faExclamation } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'cs-event-number',
    templateUrl: './event-number.component.html',
    styleUrls: ['./event-number.component.scss']
})
export class EventNumberComponent implements OnInit {
    _events: BehaviorSubject<any[]>;

    icon_search = faSearch;
    icon_left = faArrowLeft;
    icon_right = faArrowRight;
    icon_exclaim = faExclamation;

    form: FormGroup;

    constructor(
        private route: ActivatedRoute,
        private fb: FormBuilder,
        private bs: BackendCaseService,
        private loading: LoadingService,
        private router: Router
    ) {}

    ngOnInit() {
        this._events = new BehaviorSubject(new Array<any>());

        this.form = this.fb.group({
            start: [],
            end: []
        });

        this.route.data.subscribe((data: any) => {
            this.events = data.events;
            // Sets the search form to the currently searched dates
            let start;
            if (this.route.snapshot.queryParams.start) {
                start = Number.parseInt(this.route.snapshot.queryParams.start, 10);
                this.form.get('start')
                .setValue(start);
            }

            if (this.route.snapshot.queryParams.number) {
                const end = start + Number.parseInt(this.route.snapshot.queryParams.number, 10) - 1;
                this.form.get('end')
                .setValue(end);
            }
        });
    }

    get events(): any[] {
        return this._events.value;
    }

    set events(data) {
        this._events.next(data);
    }

    onSearch() {
        const start = Math.max(this.form.get('start').value, 1);
        const end = Math.max(this.form.get('end').value, start);

        const number = end + 1 - start;

        this.form.get('start').setValue(start);
        this.form.get('end').setValue(end);

        this.updateEvents(start, number);
    }

    onNext() {
        const start = Math.max(this.form.get('end').value + 1, 1);
        const number = Math.max(this.form.get('end').value - this.form.get('start').value + 1, 1);
        const end = Math.max(start + number - 1, start);

        this.form.get('start').setValue(start);
        this.form.get('end').setValue(end);

        this.updateEvents(start, number);
    }

    onPrev() {
        const number = Math.max(this.form.get('end').value - this.form.get('start').value + 1, 1);
        const start = Math.max(this.form.get('start').value - number, 1);
        const end = Math.max(start + number - 1, 1);

        this.form.get('start').setValue(start);
        this.form.get('end').setValue(end);

        this.updateEvents(start, number);
    }

    updateEvents(start: number, num: number) {
        this.router.navigate(
            [],
            {
                queryParams: { start: start, number: num }
            });
    }
}
