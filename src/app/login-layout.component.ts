import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, CanActivate } from '@angular/router';

@Component({
    selector: 'cs-login-layout',
    templateUrl: './login-layout.component.html',
    styleUrls: ['./login-layout.component.scss']
})
export class LoginLayoutComponent implements OnInit {

    constructor(private auth : AuthService, private router : Router) { }

    ngOnInit() {
        if (this.auth.isLoggedIn) {
            this.router.navigate([""]);
        }
    }

}
