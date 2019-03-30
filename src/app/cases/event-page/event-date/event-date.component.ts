import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BackendCaseService } from '../../backend-case.service';
import { LoadingService } from 'src/app/loading.service';
import { BehaviorSubject } from 'rxjs';
import { formatDate } from '@angular/common';

@Component({
    selector: 'cs-event-date',
    templateUrl: './event-date.component.html',
    styleUrls: ['./event-date.component.scss']
})
export class EventDateComponent implements OnInit {
    _events: BehaviorSubject<any[]>;

    icon_search = faSearch;

    form: FormGroup;

    constructor(
        private route: ActivatedRoute,
        private fb: FormBuilder,
        private bs: BackendCaseService,
        private loading: LoadingService,
        @Inject(LOCALE_ID) private locale: string
    ) {}

    ngOnInit() {
        this._events = new BehaviorSubject(new Array<any>());
        /*this.route.data.subscribe((data: any) => {
            this.events = data.events;
        });*/

        this.form = this.fb.group({
            after_date: [],
            after_time: [],
            before_date: [],
            before_time: []
        });
    }

    get events(): any[] {
        return this._events.value;
    }

    set events(data) {
        this._events.next(data);
    }

    onSearch() {
        if (!this.form.get('after_date').value) {
            this.form.get('after_date').setValue(formatDate(new Date(), 'yyyy-MM-dd', this.locale));
        }
        const afterDate = this.form.get('after_date').value;

        if (!this.form.get('after_time').value) {
            this.form.get('after_time').setValue('00:00');
        }
        const afterTime = this.form.get('after_time').value;

        if (!this.form.get('before_date').value) {
            this.form.get('before_date').setValue(afterDate);
        }
        const beforeDate = this.form.get('before_date').value;

        if (!this.form.get('before_time').value) {
            this.form.get('before_time').setValue('23:59');
        }
        const beforeTime = this.form.get('before_time').value;

        const after = formatDate(new Date(afterDate + ' ' + afterTime), 'yyyy-MM-dd\THH:mm:ss', this.locale);
        const before = formatDate(new Date(beforeDate + ' ' + beforeTime), 'yyyy-MM-dd\THH:mm:ss', this.locale);
        console.log(this.form.getRawValue());

        this.loading.showLoading();
        this.bs
            .getEvents({ type: 'date', start: after, end: before })
            .subscribe(result => {
                this.events = result;
            });
    }
}
