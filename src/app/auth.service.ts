import { Injectable, isDevMode } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    public loginState = new BehaviorSubject<boolean | Signoff>(false);

    constructor(private api : ApiService, private router : Router) {
        if (isDevMode()) {
            this.api.setAuthorizationHeader("Basic " + btoa(environment.default_user));
            this.loginState.next(true);
        }

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
            map(() => { return {status: true}}),
            catchError((error) => of({status: false, error: error}))
        );
    }
}

export class Signoff {
    signoff_first_name : string;
    signoff_last_name : string;
    signoff_role : string;
    signoff_username : string;
}
