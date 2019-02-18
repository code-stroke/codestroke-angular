import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { BackendCaseService } from '../backend-case.service';
import { CaseDetails } from '../case-details';
import { HeaderService } from '../../header.service';

import { NotifService } from '../../notif.service';



@Component({
  selector: 'cs-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {
    cases : BehaviorSubject<CaseDetails[]>;
    index : number = 1;

    constructor(private backendService : BackendCaseService,
                private hs : HeaderService,
                private route: ActivatedRoute,
                private notifs : NotifService,
                private router : Router) { }

    ngOnInit() {
        this.cases = new BehaviorSubject(new Array<CaseDetails>());
        this.getCases();
    }

    getCases() {
        this.route.data
        .subscribe((data : any) => {
            this.cases.next(data.list);
        });
    }

}
