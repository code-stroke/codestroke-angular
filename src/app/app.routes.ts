import { Routes } from '@angular/router';

import { MainLayoutComponent } from './main-layout.component';
import { LoginLayoutComponent } from './login-layout.component';

import { AuthGuard } from './auth.guard';
import { LoginLayoutGuard } from './login-layout.guard';
import { CASES_ROUTES } from './cases/cases.routes';

export const APP_ROUTES : Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
            {
                path: 'cases',
                children: CASES_ROUTES
            },
            {
                path: '',
                redirectTo: 'cases',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: 'login',
        component: LoginLayoutComponent,
        canActivate: [LoginLayoutGuard]
    },
    { path: '**', redirectTo: '/login'},
];
