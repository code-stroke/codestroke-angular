import { EventDateResolverService } from './event-date/event-date-resolver.service';
import { Routes } from '@angular/router';
import { EventNumberComponent } from './event-number/event-number.component';
import { EventDateComponent } from './event-date/event-date.component';
import { EventsResolverService } from './events-resolver.service';
import { EventNumberResolverService } from './event-number/event-number-resolver.service';

const eventDateResolver = {
    events: EventDateResolverService
};

const eventNumberResolver = {
    events: EventNumberResolverService
};

export const EVENT_ROUTES: Routes = [
    { path: '', redirectTo: 'number', pathMatch: 'full'},
    { path: 'number', component: EventNumberComponent, resolve: eventNumberResolver, runGuardsAndResolvers: 'paramsOrQueryParamsChange'},
    { path: 'date', component: EventDateComponent, resolve: eventDateResolver, runGuardsAndResolvers: 'paramsOrQueryParamsChange'}
];
