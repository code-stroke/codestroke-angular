import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BackendCaseService } from '../backend-case.service';
import { NotifService } from '../../notif.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HeaderService } from '../../header.service';
import { formatDate } from '../../../../node_modules/@angular/common';


@Component({
    selector: 'cs-add-page',
    templateUrl: './add-page.component.html',
    styleUrls: ['./add-page.component.scss']
})
export class AddPageComponent implements OnInit {
    form : FormGroup;

    radioGender = [
        { value: "m", text: "Male", class: "unknown" },
        { value: "f", text: "Female", class: "unknown" },
        { value: "u", text: "Unknown", class: "unknown" }
    ];

    radioStatus = [
        { value: "incoming", text: "Incoming", class: "incoming"},
        { value: "active", text: "Active", class: "active"}
    ];

    constructor(private fb : FormBuilder,
                private hs : HeaderService,
                private backendService : BackendCaseService,
                private notifService : NotifService,
                private router : Router,
                private route : ActivatedRoute,
                @Inject(LOCALE_ID) private locale: string) {

        this.form = this.fb.group({
            first_name: [''],
            last_name: [''],
            gender: ['u'],
            dob: [''],
            address: [''],
            nok: [''],
            nok_phone: [''],
            last_well: [''],
            status: ['active'],
            eta: [''],
            active_timestamp: [formatDate(new Date(), "yyyy-MM-dd HH:mm", this.locale)]
        });
    }

    ngOnInit() {

    }

    onAdd = () => {
        // Make sure that if Active is set, send only ETA + vice versa
        if (this.form.get('status').value == 'active') {
            this.form.patchValue({eta: ''});
        } else if (this.form.get('status').value == 'incoming') {
            this.form.patchValue({active_timestamp: ''});
        }

        this.backendService.addCase(this.form.getRawValue())
        .subscribe((data) => {
            this.notifService.addNotif({
                type: "success",
                html: `Succesfully added new case.`
            });
            this.router.navigate([`../edit/${data["case_id"]}`], { relativeTo: this.route});
        },
        (error) => {
            this.notifService.addNotif({
                type: "error",
                html: `Error Adding new case. Please quote the error in the console.`
            });
        });
    }

}
