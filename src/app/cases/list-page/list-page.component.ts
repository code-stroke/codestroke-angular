import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { BackendCaseService } from '../backend-case.service';
import { CaseDetails } from '../case-details';
import { HeaderService } from '../../header.service';

import { faSignOutAlt, faPlus, faTimes, faListAlt, faCog } from '@fortawesome/free-solid-svg-icons';



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
        private route: ActivatedRoute) { }

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

    get active() {
        return this.hs.subscribeToMenu();
    }

    clickMenu() {
        this.hs.toggleMenu();
    }

    icon_plus = faPlus;
    icon_times = faTimes;
    icon_list = faListAlt;
    icon_cog = faCog;

}
