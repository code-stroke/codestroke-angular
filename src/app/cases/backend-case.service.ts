import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { CaseDetails } from './case-details';
import { ApiService } from '../api.service';


@Injectable({
    providedIn: 'root'
})
export class BackendCaseService {
    cases : Array<CaseDetails>

    constructor(private api : ApiService) { }

    getCases() : Observable<CaseDetails[]> {
        //TODO: Error Handling
        return this.api.performRequest("get", "/cases/view/").pipe(
            map((data) => data["result"].map(item => CaseDetails.create(item)))
        );
    }

    getCase(id : number, table : string) {
        return this.api.performRequest("get", `/${table}/${id}/view/`).pipe(
            map((data) => { if (data) return data["result"][0]})
        );
    }

    updateCase(id : number, table : string, data : any) {
        return this.api.performRequest("put", `/${table}/${id}/edit/`, data).pipe(
            tap((data) => console.log(data))
        );
    }

    addCase(data : CaseDetails) {
        return this.api.performRequest("post", `/cases/add/`, data).pipe(
            tap((data) => console.log(data))
        );
    }
}
