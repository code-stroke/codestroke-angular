import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainLayoutComponent } from './main-layout.component';
import { LoginLayoutComponent } from './login-layout.component';

import { AuthGuard } from './auth.guard';
import { LoginLayoutGuard } from './login-layout.guard';

const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
            {
                path: 'cases',
                loadChildren: './cases/cases.module#CasesModule'
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

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
