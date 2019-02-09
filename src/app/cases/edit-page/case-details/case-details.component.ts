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

        this.updateStatus();
    }

    onSave = () => {
        // When the Case is saved, update the Status at the top with the new details
        this.save(CaseDetailsComponent.backendTable).subscribe(
            () => {
                this.case = this.form.getRawValue();
                this.updateStatus();
            }
        );
    }

    private updateStatus() {
        let caseDetail = Object.assign(new CaseDetails(), this.case);

        this.statusService.name.next(caseDetail.getName() + " " + caseDetail.getAgeGender());
        this.statusService.lastWell.next(caseDetail.last_well);
    }

}
