import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractCaseComponent } from '../abstract-case';
import { EditStatusService } from '../edit-status.service';
import { BackendCaseService } from '../../backend-case.service';
import { NotifService } from '../../../notif.service';

@Component({
    selector: 'cs-case-ed',
    templateUrl: './case-ed.component.html',
    styleUrls: ['./case-ed.component.scss']
})
export class CaseEdComponent extends AbstractCaseComponent implements OnInit {
    static backendTable = "case_eds";

    constructor(private fb : FormBuilder,
                private ar: ActivatedRoute) {
        super(ar);

        this.form = this.fb.group({
            location: [''],
            registered: [0],
            triaged: [0],
            primary_survey: [0]
        });
    }

    ngOnInit() {
        super.ngOnInit();
    }

    getBackendTable() { return CaseEdComponent.backendTable}

    onSave = () => {
        this.save();
    }
}
