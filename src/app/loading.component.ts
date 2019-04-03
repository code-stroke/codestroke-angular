import { Component, OnInit } from '@angular/core';
import { LoadingService } from './loading.service';

@Component({
    selector: 'cs-loading',
    template: `
    <ng-container *ngIf='loading.loadingState | async'>
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
        <div class="rect5"></div>
    </ng-container>
      `,
    styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

    constructor(public loading: LoadingService) { }

    ngOnInit() {
    }

}
