import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BackendCaseService } from '../backend-case.service';
import { NotifService } from '../../notif.service';
import { Router, ActivatedRoute } from '@angular/router';

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

    constructor(private fb : FormBuilder,
                private backendService : BackendCaseService,
                private notifService : NotifService,
                private router : Router,
                private route : ActivatedRoute) {

        this.form = this.fb.group({
            first_name: [''],
            last_name: [''],
            gender: ['u'],
            dob: [''],
            address: [''],
            nok: [''],
            nok_phone: [''],
            last_well: ['']
        });
    }

    ngOnInit() {

    }

    onAdd = () => {
        this.backendService.addCase(this.form.getRawValue())
        .subscribe((data) => {
            if (data["success"]) {
                this.notifService.addNotif({
                    type: "success",
                    html: `Succesfully added new case.`
                });
                this.router.navigate([`../edit/${data["case_id"]}`], { relativeTo: this.route});
            } else {
                this.notifService.addNotif({
                    type: "error",
                    html: `Error Adding new case. Please quote the error in the console.`
                });

            }
        });
    }
}
