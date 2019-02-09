import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, merge, ReplaySubject } from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private server_url : string = "https://codefactor.pythonanywhere.com"
    private httpHeader = new HttpHeaders({
        "Authorization": "Basic " + btoa("test_user:password")
    });

    responseStream = new ReplaySubject<any>(1);
    errorStream = new ReplaySubject<any>(1);

    constructor(private http : HttpClient) { }

    performRequest(method : string, url : string, data ?: any) {
        return this.http.request(
            method,
            `${this.server_url}${url}`,
            {
                responseType: "json",
                headers: this.httpHeader,
                body: data
            }
        ).pipe(
            tap(
                response => this.responseStream.next(response),
                error => this.errorStream.next(error)
            ),
            shareReplay(1)
        );
    }

    getLogger() {
        return merge(this.responseStream, this.errorStream).pipe(
            tap(val => console.debug(val))
        ).subscribe();
    }

    setAuthorizationHeader(header : string) {
        this.httpHeader = this.httpHeader.set("Authorization", header);
    }
}
