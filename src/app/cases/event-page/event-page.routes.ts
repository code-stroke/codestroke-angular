import { Routes } from '@angular/router';
import { EventNumberComponent } from './event-number/event-number.component';
import { EventDateComponent } from './event-date/event-date.component';
import { EventsResolverService } from './events-resolver.service';

const eventsResolver = {
    events: EventsResolverService
};

export const EVENT_ROUTES: Routes = [
    { path: '', redirectTo: 'number', pathMatch: 'full'},
    { path: 'number', component: EventNumberComponent, resolve: eventsResolver},
    { path: 'date', component: EventDateComponent}
];
