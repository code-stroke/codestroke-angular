import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    server_url : string = "http://codestroke.pythonanywhere.com"
    httpOptions = {
        headers: new HttpHeaders({
            "Authorization": "Basic " + btoa("henrietta:lacks")
        })
    }
    public loginState = new BehaviorSubject<boolean | Signoff>(true);

    constructor(private http: HttpClient, private router : Router) {    }

    login (username : string, password : string) : Observable<boolean | Signoff>{
        this.httpOptions.headers = this.httpOptions.headers
                                    .set("Authorization", "Basic " + btoa(`${username}:${password}`));

        return this.http.get(`${this.server_url}/login/`, this.httpOptions).pipe(
            map(val => {
                if (val["success"]) {
                    this.loginState.next(val["user_info"]);
                    return this.loginState.value;
                } else {
                    return false;
                }
            })
        );
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
}
