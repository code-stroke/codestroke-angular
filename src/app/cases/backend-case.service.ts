import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { CaseDetails } from './case-details';
import { AuthService } from '../auth.service';


@Injectable({
    providedIn: 'root'
})
export class BackendCaseService {
    server_url : string = "http://codestroke.pythonanywhere.com"
    cases : Array<CaseDetails>

    constructor(private http: HttpClient, private auth: AuthService) { }

    getCases() : Observable<CaseDetails[]> {
        //TODO: Error Handling
        return this.http.get(`${this.server_url}/cases/`, this.auth.httpOptions).pipe(
            map((data) => { return this.auth.checkResult(data) }),
            map((data) => {if (data) return data.result}),
            map((items) => items.map(item => CaseDetails.create(item)))
        );
    }

    getCase(id : number, table : string) {
        return this.http.get(`${this.server_url}/${table}/${id}/`, this.auth.httpOptions).pipe(
            //tap((data) => console.log(data)),
            map((data) => { return this.auth.checkResult(data)}),
            map((data) => { if (data) return data.result[0]})
        )
    }

    updateCase(id : number, table : string, data : any) {
        return this.http.put(`${this.server_url}/${table}/${id}/`, data, this.auth.httpOptions).pipe(
            tap((data) => console.log(data)),
        )
    }

    addCase(data : CaseDetails) {
        console.log(data);
        return this.http.post(`${this.server_url}/cases/`, data, this.auth.httpOptions).pipe(
            tap((data) => console.log(data)),
        )
    }
}
