import { Routes } from '@angular/router';

import { ListPageComponent } from './list-page/list-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { CaseResolverService } from './edit-page/case-resolver.service';
import { ListResolverService } from './list-page/list-resolver.service';
import { AddPageComponent } from './add-page/add-page.component';

import { EDIT_ROUTES } from './edit-page/edit-page.routes';
import { EventPageComponent } from './event-page/event-page.component';
import { EventsResolverService } from './event-page/events-resolver.service';

const caseResolver = {
    case: CaseResolverService
}

const listResolver = {
    list: ListResolverService
}

const eventsResolver = {
    events: EventsResolverService
}

export const CASES_ROUTES : Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: ListPageComponent, resolve: listResolver },
    { path: 'add', component: AddPageComponent },
    { path: 'events', component: EventPageComponent, resolve: eventsResolver },
    {
        path: 'edit/:id',
        component: EditPageComponent,
        resolve: caseResolver,
        children: EDIT_ROUTES
    }
];
