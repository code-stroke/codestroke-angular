import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { BackendCaseService } from '../backend-case.service';
import { AuthService } from '../../auth.service';

@Injectable({
    providedIn: 'root'
})
export class EventsResolverService implements Resolve<any> {

    constructor(private backend: BackendCaseService, private auth: AuthService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<never> {
        return this.backend.getEvents();
    }
}
