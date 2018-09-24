import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPageComponent } from './list-page/list-page.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: '/cases/list', pathMatch: 'full' },
            { path: 'list', component: ListPageComponent }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasesRoutingModule { }
