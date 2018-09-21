import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPageComponent } from './list-page/list-page.component';

const routes: Routes = [
    { path: 'list', component: ListPageComponent},
    { path: '', redirectTo: '/list', pathMatch: 'full'},
    { path: '**', redirectTo: '/list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
