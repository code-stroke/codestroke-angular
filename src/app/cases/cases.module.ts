import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CasesRoutingModule } from './cases-routing.module';
import { ListPageComponent } from './list-page/list-page.component';
import { ListContainerComponent } from './list-page/list-container/list-container.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CaseHistoryComponent } from './edit-page/case-history/case-history.component';
import { CaseEdComponent } from './edit-page/case-ed/case-ed.component';
import { CaseRadiologyComponent } from './edit-page/case-radiology/case-radiology.component';
import { CaseDetailsComponent } from './edit-page/case-details/case-details.component';
import { CaseAssessmentComponent } from './edit-page/case-assessment/case-assessment.component';
import { CaseManagementComponent } from './edit-page/case-management/case-management.component';
import { SelectScoreComponent } from './edit-page/ui/select-score.component';
import { ToggleComponent } from './edit-page/ui/toggle.component';
import { DoubleClickComponent } from './edit-page/ui/double-click.component';
import { AddPageComponent } from './add-page/add-page.component';
import { DateTimeComponent } from './edit-page/ui/date-time.component';



@NgModule({
    imports: [
        CommonModule,
        FontAwesomeModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule
    ],
    declarations: [
        ListPageComponent,
        ListContainerComponent,
        EditPageComponent,
        CaseHistoryComponent,
        CaseEdComponent,
        CaseRadiologyComponent,
        CaseDetailsComponent,
        CaseAssessmentComponent,
        CaseManagementComponent,
        SelectScoreComponent,
        ToggleComponent,
        DoubleClickComponent,
        AddPageComponent,
        DateTimeComponent
    ]
})
export class CasesModule { }
