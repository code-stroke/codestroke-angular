import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractCaseComponent } from '../abstract-case';
import { CaseDetails } from '../../case-details';
import { EditStatusService } from '../edit-status.service';
import { BackendCaseService } from '../../backend-case.service';
import { NotifService } from '../../../notif.service';
import { PopupService } from '../popup.service';

@Component({
  selector: 'cs-case-details',
  templateUrl: './case-details.component.html',
  styleUrls: ['./case-details.component.scss']
})
export class CaseDetailsComponent extends AbstractCaseComponent implements OnInit {
    static backendTable = "cases";

    radioGender = [
        { value: "m", text: "Male", class: "unknown" },
        { value: "f", text: "Female", class: "unknown" },
        { value: "u", text: "Unknown", class: "unknown" }
    ];

    caseDetail : CaseDetails;

    constructor(private fb : FormBuilder,
                private ar: ActivatedRoute,
                private statusService : EditStatusService,
                private bs : BackendCaseService,
                private router : Router,
                private ns : NotifService,
                private ps : PopupService) {
        super();

        this.form = this.fb.group({
            first_name: [''],
            last_name: [''],
            gender: ['', Validators.pattern('(f|m|u)')],
            dob: [''],
            address: [''],
            nok: [''],
            nok_phone: [''],
            last_well: ['']
        });

        this.route = ar;
        this.backendService = bs;
        this.notifService = ns;
        this.ps = ps;
    }

    ngOnInit() {
        super.ngOnInit();

        this.caseDetail = Object.assign(new CaseDetails(), this.case);

        this.statusService.name.next(this.caseDetail.getName() + " " + this.caseDetail.getAgeGender());
        this.statusService.status.next(this.caseDetail.status);
        this.statusService.statusTime.next(this.caseDetail.getStatusTime());
        this.statusService.lastWell.next(this.caseDetail.last_well);
    }

    onSave = () => {
        this.save(CaseDetailsComponent.backendTable);
    }

}
