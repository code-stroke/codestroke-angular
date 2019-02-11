import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { AbstractCaseComponent } from '../abstract-case';
import { ActivatedRoute, Router } from '@angular/router';
import { EditStatusService } from '../edit-status.service';
import { BackendCaseService } from '../../backend-case.service';
import { NotifService } from '../../../notif.service';
import { PopupService } from '../popup.service';


@Component({
    selector: 'cs-case-radiology',
    templateUrl: './case-radiology.component.html',
    styleUrls: ['./case-radiology.component.scss']
})
export class CaseRadiologyComponent extends AbstractCaseComponent implements OnInit {
    static backendTable = "case_radiologies";

    radioYN = [
        { value: 1, text: "Yes", class: "yes" },
        { value: 0, text: "No", class: "no" }
    ];

    constructor(private fb : FormBuilder,
                private ar: ActivatedRoute) {
        super(ar);

        this.form = this.fb.group({
          ct_available: [null],
          ct_available_loc: [null],
          arrived_to_ct: [null],
          ct_complete: [null],
          ich_found: [null],
          do_cta_ctp: [null],
          cta_ctp_complete: [null],
          large_vessel_occlusion: [null]
        });
    }

    ngOnInit() {
        super.ngOnInit();

        this.checkProgress(this.form.getRawValue());

        this.form.valueChanges.subscribe(val => {
            this.checkProgress(val);
        });
    }

    progress = 0;
    checkProgress(val) {
        this.progress = 0;
        if (val.ct_available === 1) {
            this.progress++;
        } else {return;}
        if (val.arrived_to_ct === 1) {
            this.progress++;
        } else {return;}
        if (val.ct_complete === 1) {
            this.progress++;
        } else {return;}
        if (val.ich_found === 0) {
            this.progress++;
        } else {return;}
        if (val.do_cta_ctp === 1) {
            this.progress++;
        } else {return;}
        if (val.cta_ctp_complete === 1) {
            this.progress++;
        } else {return;}
    }

    getBackendTable() { return CaseRadiologyComponent.backendTable}

    onSave = () => {
        this.save();
    }
}
