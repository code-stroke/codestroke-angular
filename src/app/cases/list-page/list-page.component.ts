import { Component, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { BackendCaseService } from '../backend-case.service';
import { CaseDetails } from '../case-details';


@Component({
  selector: 'cs-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {
    cases : BehaviorSubject<CaseDetails[]>;
    test : BehaviorSubject<number>
    index : number = 1;

    constructor(private backendService : BackendCaseService) { }

    ngOnInit() {
        this.cases = new BehaviorSubject(new Array<CaseDetails>());
        this.getCases();
    }

    getCases() {
        this.backendService.getCases().subscribe((data) => {
            this.cases.next(data);
        });
    }

}
