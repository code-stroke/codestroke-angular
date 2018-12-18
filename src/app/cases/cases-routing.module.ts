import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPageComponent } from './list-page/list-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { CaseDetailsComponent } from './edit-page/case-details/case-details.component';
import { CaseHistoryComponent } from './edit-page/case-history/case-history.component';
import { CaseEdComponent } from './edit-page/case-ed/case-ed.component';
import { CaseRadiologyComponent } from './edit-page/case-radiology/case-radiology.component';
import { CaseAssessmentComponent } from './edit-page/case-assessment/case-assessment.component';
import { CaseManagementComponent } from './edit-page/case-management/case-management.component';
import { CaseResolverService } from './edit-page/case-resolver.service';
import { ListResolverService } from './list-page/list-resolver.service';
import { AddPageComponent } from './add-page/add-page.component';

const caseResolver = {
    case: CaseResolverService
}

const listResolver = {
    list: ListResolverService
}

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: ListPageComponent, resolve: listResolver },
            { path: 'add', component: AddPageComponent },
            {
                path: 'edit/:id',
                component: EditPageComponent,
                resolve: caseResolver,
                children: [
                    { path: '', redirectTo: 'details', pathMatch: 'full'},
                    { path: 'details', component: CaseDetailsComponent, resolve: caseResolver},
                    { path: 'history', component: CaseHistoryComponent, resolve: caseResolver},
                    { path: 'ed', component: CaseEdComponent, resolve: caseResolver},
                    { path: 'radiology', component: CaseRadiologyComponent, resolve: caseResolver},
                    { path: 'assessment', component: CaseAssessmentComponent, resolve: caseResolver},
                    { path: 'management', component: CaseManagementComponent, resolve: caseResolver},
                //    { path: 'refresh' }
                ]
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasesRoutingModule { };
