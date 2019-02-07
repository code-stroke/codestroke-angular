import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Subject, Observable, of } from 'rxjs';
import { map, tap, switchMap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    public loginState = new BehaviorSubject<boolean | Signoff>(false);

    constructor(private api : ApiService, private router : Router) {

        /** Catch any Auth Errors **/
        this.api.errorStream.subscribe( error => {
            if (error.status == 401) {
                this.loginState.next(false);
                this.router.navigate(["/login"]);
            }
        });

    }

    authenticate (username : string, password : string) {
        this.api.setAuthorizationHeader("Basic " + btoa(`${username}:${password}`));

        return this.api.performRequest("get", "/clinicians/profile/").pipe(
            tap({
                next: response => this.loginState.next(response["user_info"]),
                error: () => this.loginState.next(false)
            }),
            map(() => true),
            catchError(() => of(false))
        );
    }

    handleAuthError(obs : Observable<any>) {
        obs.pipe(
            catchError(error => {
                return of(error);
            })
        )
    }

    checkResult(data : any) {
        if (data.success) {
            return data;
        }

        if (data.error_type == "auth") {
            this.loginState.next(false);
            this.router.navigate(["/login"]);
            return false;
        }
    }
}

export class Signoff {
    signoff_first_name : string;
    signoff_last_name : string;
    signoff_role : string;
    signoff_username : string;
}
