import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounce, debounceTime } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Component({
    selector: 'cs-login-layout',
    templateUrl: './login-layout.component.html',
    styleUrls: ['./login-layout.component.scss']
})
export class LoginLayoutComponent implements OnInit, OnDestroy {
    loginForm = this.fb.group({
        username: ['test_users', Validators.required],
        password: ['password']
    });

    onSubmit = new Subject<any>();

    constructor(private auth : AuthService, private router : Router,
                private fb : FormBuilder) {

        // All submits (clicks, pressing enters) are observed here
        this.onSubmit.pipe(
            debounceTime(200)
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

        this.auth.authenticate(user, pass).subscribe(val => {
            console.log(val);
            if (val) {
                this.router.navigate([""]);
            }
        });
    }

    ngOnDestroy() {}

}
