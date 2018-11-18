import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { AuthService } from './auth.service';

@Component({
    selector: 'cs-login-layout',
    templateUrl: './login-layout.component.html',
    styleUrls: ['./login-layout.component.scss']
})
export class LoginLayoutComponent implements OnInit, OnDestroy {

    constructor(private auth : AuthService, private router : Router,
                private fb : FormBuilder) { }

    loginForm = this.fb.group({
        username: ['henrietta', Validators.required],
        password: ['lacks']
    });

    ngOnInit() {
        if (this.auth.loginState.value) {
            this.router.navigate([""]);
        }
    }

    private loadingLogin = false;
    onSubmit() {
        //TODO: Display loading
        //TODO: Display Errors
        if (!this.loadingLogin) {
            this.loadingLogin = true;
            this.auth.login(this.loginForm.get("username").value,
                            this.loginForm.get("password").value).subscribe(val => {
                                this.loadingLogin = false;
                                if (val) {
                                    this.router.navigate([""]);
                                }
                            });
        }
    }

    ngOnDestroy() {}

}
