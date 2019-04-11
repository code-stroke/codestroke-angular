import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { trigger, transition, animate, style } from '@angular/animations';

import { faAmbulance, faHospitalAlt, faCalendarCheck, faUserClock, faSignOutAlt, faPlus, faTimes, faListAlt, faCog, faHome } from '@fortawesome/free-solid-svg-icons';

import { EditStatusService } from './edit-status.service';
import { BackendCaseService } from '../backend-case.service';
import { CaseDetails } from '../case-details';
import { HeaderService } from '../../header.service';
import { ApiService } from '../../api.service';




@Component({
    selector: 'cs-edit-page',
    templateUrl: './edit-page.component.html',
    styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
    static parent = true;
    static backendTable = 'cases';

    case_id: number;
    caseDetail: CaseDetails;

    nav = [
        {
            name: 'Details',
            path: 'details'
        },
        {
            name: 'History',
            path: 'history'
        },
        {
            name: 'Emergency',
            path: 'ed'
        },
        {
            name: 'Assessment',
            path: 'assessment'
        },
        {
            name: 'Radiology',
            path: 'radiology'
        },
        {
            name: 'Management',
            path: 'management'
        }
    ];

    constructor(private route: ActivatedRoute,
                private router: Router,
                private bs: BackendCaseService,
                public statusService: EditStatusService,
                private hs: HeaderService,
                private api: ApiService
                ) { }

    ngOnInit() {
        this.setupStatus();
    }

    icon_incoming = faAmbulance;
    icon_active = faHospitalAlt;
    icon_completed = faCalendarCheck;
    //
    icon_status = this.icon_incoming;
    status_text = 'ETA';
    //
    icon_well = faUserClock;
    private setupStatus() {
        this.route.data
        .subscribe((data: any) => {
            this.caseDetail = Object.assign(new CaseDetails(), data.case);

            this.statusService.name.next(this.caseDetail.getName() + ' ' + this.caseDetail.getAgeGender());
            this.statusService.status.next(this.caseDetail.status);
            this.statusService.statusTime.next(this.caseDetail.getStatusTime());
            this.statusService.lastWell.next(this.caseDetail.last_well);
        });

        this.statusService.status.subscribe((stat: string) => {
            switch (stat) {
                case 'incoming':
                    this.status_text = 'ETA';
                    this.icon_status = this.icon_incoming;
                    break;
                case 'active':
                    this.status_text = 'Arrived';
                    this.icon_status = this.icon_active;
                    break;
                case 'completed':
                    this.status_text = 'Completed';
                    this.icon_status = this.icon_completed;
                    break;
            }
        });
    }

}
