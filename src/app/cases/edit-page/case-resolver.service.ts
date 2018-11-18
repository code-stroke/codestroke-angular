import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { BackendCaseService } from '../backend-case.service';
import { AuthService } from '../../auth.service';


@Injectable({
    providedIn: 'root'
})
export class CaseResolverService implements Resolve<any> {

    constructor(private backend: BackendCaseService, private auth: AuthService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<never> {
        let params = route.component["parent"] ? route.params : route.parent.params;
        return this.backend.getCase(params.id, route.component["backendTable"]);
        //return of(false);
    }
}
