import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { BackendCaseService } from '../backend-case.service';
import { AuthService } from '../../auth.service';


@Injectable({
    providedIn: 'root'
})
export class EventsResolverService implements Resolve<any> {

    constructor(private backend: BackendCaseService, private auth: AuthService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<never> {
        return this.backend.getEvents().pipe(
            catchError(error => {
                if (error.status && error.status === 401) {
                    console.warn(`Attempted unauthorised access to: Events Page`);
                } else {
                    console.error(`Error loading events:`);
                    console.error(error);
                }
                return of([]);
            })
        );
    }
}
