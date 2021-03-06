import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { CaseDetails } from './case-details';
import { ApiService } from '../api.service';
import { LoadingService } from '../loading.service';


@Injectable({
    providedIn: 'root'
})
export class BackendCaseService {
    cases: Array<CaseDetails>;

    constructor(private api: ApiService, private loading: LoadingService) { }

    getCases(): Observable<CaseDetails[]> {
        // TODO: Error Handling
        this.loading.showLoading();
        return this.api.performRequest('get', '/cases/view/').pipe(
            // Hide the loading when results come back (either normal or error)
            tap(() => this.loading.hideLoading(), () => this.loading.hideLoading()),
            map((data) => data['result'].map(item => CaseDetails.create(item)))
        );
    }

    getCase(id: number, table: string) {
        this.loading.showLoading();
        return this.api.performRequest('get', `/${table}/${id}/view/`).pipe(
            tap(() => this.loading.hideLoading(), () => this.loading.hideLoading()),
            map((data) => { if (data) { return data['result'][0]; }})
        );
    }

    updateCase(id: number, table: string, data: any) {
        this.loading.showLoading();
        return this.api.performRequest('put', `/${table}/${id}/edit/`, data).pipe(
            tap(() => this.loading.hideLoading(), () => this.loading.hideLoading()),
            tap((data) => console.log(data))
        );
    }

    addCase(data: CaseDetails) {
        this.loading.showLoading();
        return this.api.performRequest('post', `/cases/add/`, data).pipe(
            tap(() => this.loading.hideLoading(), () => this.loading.hideLoading()),
            tap((data) => console.log(data))
        );
    }

    getEvents(data: any): Observable<any> {
        switch (data.type) {
            case 'date':
                let date_params = new HttpParams();
                date_params = date_params.set('start', data.start);
                date_params = date_params.set('end', data.end);

                console.log(date_params.toString());

                return this.api.performRequest('get', '/event_log/datetime/', null, date_params).pipe(
                    // Hide the loading when results come back (either normal or error)
                    tap(() => this.loading.hideLoading(), () => this.loading.hideLoading()),
                    tap((data) => console.log(data)),
                    map((data) => data['result']),
                    
                );
                break;
            case 'limit':
            default:
                let lim_params = new HttpParams();
                if (data.start) {
                    lim_params = lim_params.set('start', data.start);
                } else {
                    lim_params = lim_params.set('start', '1');
                }

                if (data.number) {
                    lim_params = lim_params.set('number', data.number);
                } else {
                    lim_params = lim_params.set('number', '50');
                }

                console.log(lim_params.toString());

                return this.api.performRequest('get', '/event_log/limit/', null, lim_params).pipe(
                    // Hide the loading when results come back (either normal or error)
                    tap(() => this.loading.hideLoading(), () => this.loading.hideLoading()),
                    map((data) => data['result']),
                    tap((data) => console.log(data))
                );
        }
    }
}
