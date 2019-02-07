import { Routes } from '@angular/router';

import { CaseDetailsComponent } from './case-details/case-details.component';
import { CaseHistoryComponent } from './case-history/case-history.component';
import { CaseEdComponent } from './case-ed/case-ed.component';
import { CaseRadiologyComponent } from './case-radiology/case-radiology.component';
import { CaseAssessmentComponent } from './case-assessment/case-assessment.component';
import { CaseManagementComponent } from './case-management/case-management.component';
import { CaseResolverService } from './case-resolver.service';

const caseResolver = {
    case: CaseResolverService
}

export const EDIT_ROUTES : Routes = [
    { path: '', redirectTo: 'details', pathMatch: 'full'},
    { path: 'details', component: CaseDetailsComponent, resolve: caseResolver},
    { path: 'history', component: CaseHistoryComponent, resolve: caseResolver},
    { path: 'ed', component: CaseEdComponent, resolve: caseResolver},
    { path: 'radiology', component: CaseRadiologyComponent, resolve: caseResolver},
    { path: 'assessment', component: CaseAssessmentComponent, resolve: caseResolver},
    { path: 'management', component: CaseManagementComponent, resolve: caseResolver}
];
