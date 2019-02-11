import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AbstractCaseComponent } from './abstract-case';

@Injectable({
  providedIn: 'root'
})
export class EditChangesGuard implements CanDeactivate<AbstractCaseComponent> {
    canDeactivate(
        component : AbstractCaseComponent,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        return component.canDeactivate();
    }
}
