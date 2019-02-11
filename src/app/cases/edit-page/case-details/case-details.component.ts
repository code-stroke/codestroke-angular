import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { AbstractCaseComponent } from '../abstract-case';
import { CaseDetails } from '../../case-details';
import { EditStatusService } from '../edit-status.service';

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
                private statusService : EditStatusService) {
        super(ar);

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
    }

    ngOnInit() {
        super.ngOnInit();

        this.updateStatus();
    }

    getBackendTable() { return CaseDetailsComponent.backendTable}

    onStatus = () => {
        let statusData = {
            status: "active"
        };
        let time = new Date();

        this.backendService.updateCase(this.case_id, this.getBackendTable(), statusData)
        .subscribe(
            () => {
                this.notifService.addNotif({
                    type: "success",
                    html: `Succesfully marked this case as Active.`
                });
                this.case.status = "active";
                this.statusService.status.next(this.case.status);
                this.statusService.statusTime.next(time);
            },
            () => {
                this.notifService.addNotif({
                    type: "error",
                    html: `Error marking case as Active.`
                });
            }
        );
    }

    onSave = () => {
        // When the Case is saved, update the Status at the top with the new details
        this.save().subscribe(
            () => {
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
