import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { trigger, transition, animate, style } from '@angular/animations';

import { faAmbulance, faHospitalAlt, faCalendarCheck, faUserClock } from '@fortawesome/free-solid-svg-icons';

import { EditStatusService } from './edit-status.service';
import { BackendCaseService } from '../backend-case.service';
import { CaseDetails } from '../case-details';
import { PopupService } from './popup.service';



@Component({
    selector: 'cs-edit-page',
    templateUrl: './edit-page.component.html',
    styleUrls: ['./edit-page.component.scss'],
    animations: [
        trigger(
            'popup',
            [
                transition(
                    ':enter', [
                        style({opacity: 0}),
                        animate('0.3s', style({'opacity': 1}))
                    ]
                ),
                transition(
                    ':leave', [
                        style({'opacity': 1}),
                        animate('0.3s', style({'opacity': 0}))
                    ]
                )
            ]
        )
    ]
})
export class EditPageComponent implements OnInit {
    static parent = true;
    static backendTable = "cases";

    icon_incoming = faAmbulance;
    icon_active = faHospitalAlt;
    icon_completed = faCalendarCheck;

    icon_status = this.icon_incoming;
    status_text = "ETA";

    //icon_well = faUserInjured;
    icon_well = faUserClock;

    nav = [
        {
            name: "Details",
            path: "details"
        },
        {
            name: "History",
            path: "history"
        },
        {
            name: "Emergency",
            path: "ed"
        },
        {
            name: "Assessment",
            path: "assessment"
        },
        {
            name: "Radiology",
            path: "radiology"
        },
        {
            name: "Management",
            path: "management"
        }
    ];

    case_id : number;
    caseDetail : CaseDetails;

    displayPopup = false;
    popup : any;

    constructor(private route: ActivatedRoute,
                private bs: BackendCaseService,
                private status : EditStatusService,
                private popupService : PopupService
                ) { }

    ngOnInit() {
        this.route.data
        .subscribe((data : any) => {
            this.caseDetail = Object.assign(new CaseDetails(), data.case);

            this.status.name.next(this.caseDetail.getName() + " " + this.caseDetail.getAgeGender());
            this.status.status.next(this.caseDetail.status);
            this.status.statusTime.next(this.caseDetail.getStatusTime());
            this.status.lastWell.next(this.caseDetail.last_well);
        });

        this.status.status.subscribe((stat : string) => {
            switch (stat) {
                case "incoming":
                    this.status_text = "ETA";
                    this.icon_status = this.icon_incoming;
                    break;
                case "active":
                    this.status_text = "Arrived";
                    this.icon_status = this.icon_active;
                    break;
                case "completed":
                    this.status_text = "Completed";
                    this.icon_status = this.icon_completed;
                    break;
            }
        });

        this.popupService.popup.subscribe((pop : any) => {
            if (pop) {
                this.popup = pop;
                this.displayPopup = true;
            } else {
                this.displayPopup = false;
            }
        })
    }

    executePopup(func : any) {
        func();
        this.popupService.popup.next(false);
    }

}
