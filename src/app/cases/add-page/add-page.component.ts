import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BackendCaseService } from '../backend-case.service';
import { NotifService } from '../../notif.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HeaderService } from '../../header.service';
import { faSignOutAlt, faPlus, faTimes, faListAlt, faCog, faHome } from '@fortawesome/free-solid-svg-icons';


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
                private hs : HeaderService,
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
    get active() {
        return this.hs.subscribeToMenu();
    }

    clickMenu() {
        this.hs.toggleMenu();
    }

    icon_plus = faPlus;
    icon_times = faTimes;
    icon_list = faListAlt;
    icon_cog = faCog;
    icon_home = faHome


    onMenuClick(option : string) {
        switch (option) {
            case "home":
                this.router.navigate([`../list-page/`], { relativeTo: this.route});
                break;
            default:
                this.notifService.addNotif({
                    type: "error",
                    html: `Unfortunately, this feature is not enabled yet.`
                });
        }
    }

}
