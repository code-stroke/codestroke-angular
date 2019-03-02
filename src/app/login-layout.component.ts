import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounce, debounceTime, takeUntil } from 'rxjs/operators';

import { AuthService } from './auth.service';
import { LoadingService } from './loading.service';
import { NotifService } from './notif.service';

@Component({
    selector: 'cs-login-layout',
    templateUrl: './login-layout.component.html',
    styleUrls: ['./login-layout.component.scss']
})
export class LoginLayoutComponent implements OnInit, OnDestroy {
    loginForm = this.fb.group({
        username: ['', Validators.required],
        password: ['']
    });

    onSubmit = new Subject<any>();

    constructor(private auth : AuthService, private router : Router,
                private fb : FormBuilder, private loading : LoadingService,
                private notifService : NotifService) {

        // All submits (clicks, pressing enters) are observed here
        this.onSubmit.pipe(
            debounceTime(200),
            takeUntil(this._onDestroy)
        ).subscribe( () => {
            this.checkForm();
        });
    }

    ngOnInit() {
        if (this.auth.loginState.value) {
            this.router.navigate([""]);
        }

    }

    private checkForm() {
        let user = this.loginForm.get("username").value;
        let pass = this.loginForm.get("password").value;

        this.loading.showLoading();
        this.auth.authenticate(user, pass).subscribe(val => {
            this.loading.hideLoading();
            if (val.status) {
                let state = this.auth.loginState.value;
                this.notifService.addNotif({
                    type: "success",
                    html: `Welcome Back, ${state["signoff_first_name"]} ${state["signoff_last_name"]}`
                })
                this.router.navigate([""]);
            } else {
                if (val["error"].status && val["error"].status === 401) {
                    this.notifService.addNotif({
                        type: "error",
                        html: `Incorrect login details`
                    })
                } else {
                    this.notifService.addNotif({
                        type: "error",
                        html: `Error connecting to the server. See console log.`
                    })
                    console.error(val["error"]);
                }

            }
        });
    }

    // Clean up the open Subscription
    _onDestroy = new Subject<any>();
    ngOnDestroy() {
        this._onDestroy.next();
    }

}
