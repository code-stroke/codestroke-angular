import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasesRoutingModule } from './cases-routing.module';
import { ListPageComponent } from './list-page/list-page.component';
import { ListContainerComponent } from './list-page/list-container/list-container.component';

@NgModule({
    imports: [
        CommonModule,
        CasesRoutingModule
    ],
    declarations: [
        ListPageComponent,
        ListContainerComponent
    ]
})
export class CasesModule { }
