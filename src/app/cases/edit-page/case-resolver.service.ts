import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { BackendCaseService } from '../backend-case.service';
import { AuthService } from '../../auth.service';


@Injectable({
    providedIn: 'root'
})
export class CaseResolverService implements Resolve<any> {

    constructor(private backend: BackendCaseService, private auth: AuthService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<never> {
        let params = route.component["parent"] ? route.params : route.parent.params;
        return this.backend.getCase(params.id, route.component["backendTable"]).pipe(
            catchError(error => {
                if (error.status && error.status === 401) {
                    console.warn(`Attempted unauthorised access to: Case Page`);
                } else {
                    console.error(`Error loading case details:`);
                    console.error(error);
                }
                return of([]);
            })
        );
    }
}
