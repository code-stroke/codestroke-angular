import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractCaseComponent } from '../abstract-case';
import { EditStatusService } from '../edit-status.service';
import { BackendCaseService } from '../../backend-case.service';
import { NotifService } from '../../../notif.service';
import { PopupService } from '../popup.service';

@Component({
    selector: 'cs-case-history',
    templateUrl: './case-history.component.html',
    styleUrls: ['./case-history.component.scss']
})
export class CaseHistoryComponent extends AbstractCaseComponent implements OnInit {
    static backendTable = "case_histories";

    radioYNU = [
        { value: "yes", text: "Yes", class: "yes" },
        { value: "no", text: "No", class: "no" },
        { value: "unknown", text: "Unknown", class: "unknown" }
    ];

    constructor(private fb : FormBuilder,
                private ar: ActivatedRoute) {
        super(ar);

        this.form = this.fb.group({
            pmhx: [''],
            meds: [''],
            anticoags: [''],
            anticoags_last_dose: [''],
            hopc: [''],
            weight: [''],
            last_meal: [''],
            test: ['']
        });
    }

    ngOnInit() {
        super.ngOnInit();
    }

    getBackendTable() { return CaseHistoryComponent.backendTable}

    onSave = () => {
        this.save();
    }
}
