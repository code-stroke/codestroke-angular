import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BackendCaseService } from '../../backend-case.service';
import { AuthService } from 'src/app/auth.service';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class EventDateResolverService implements Resolve<any> {

    constructor(private backend: BackendCaseService, private auth: AuthService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<never> {
        if (route.queryParams.start && route.queryParams.end) {
            return this.backend.getEvents({ type: 'date', start: route.queryParams.start, end: route.queryParams.end }).pipe(
                catchError(error => {
                    if (error.status && error.status === 401) {
                        console.warn(`Attempted unauthorised access to: Events Page`);
                    } else {
                        console.error(`Error loading events:`);
                        console.error(error);
                    }
                    return of([]);
                }),

                // Backend returns empty set of results as {null}
                // {null} does not emit an event to the observable
                // Need to convert null to [] so that the component will update even on {null} results
                map((data) => data ? data : [])
            );
        } else {
            return of([]);
        }
    }
}
