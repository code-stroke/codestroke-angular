import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CaseDetails } from './case-details';


@Injectable({
    providedIn: 'root'
})
export class BackendCaseService {
    server_url : string = "http://codestroke.pythonanywhere.com/"
    cases : Array<CaseDetails>

    constructor(private http: HttpClient) { }

    getCases() : Observable<CaseDetails[]> {
        //TODO: Error Handling
        return this.http.get(`${this.server_url}/cases/`).pipe(
            map(obj => obj["result"])
        );
    }
}
