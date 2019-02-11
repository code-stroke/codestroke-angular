import { FormGroup, Validators, ValidatorFn, AbstractControl } from "@angular/forms";
import { BackendCaseService } from "../backend-case.service";
import { OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PopupService } from "./popup.service";
import { NotifService } from "../../notif.service";

export class AbstractCaseComponent implements OnInit {
    static backendTable : string;

    form : FormGroup;
    backendService : BackendCaseService;
    route: ActivatedRoute;
    case_id : number;
    case : any;
    notifService : NotifService;
    popupService : PopupService;

    ngOnInit() {
        this.route.data
        .subscribe((data : any) => {
            this.case = data.case;
            this.case_id = this.case.case_id;
            this.form.patchValue(data.case);
            console.log(data.case);
            this.setDefaultState();
        });
    }

    setDefaultState() {
        for (let [key, value] of Object.entries(this.case)) {
            let control = this.form.get(key);
            if (control) {
                control.setValidators([equalsValidator(value)]);
                control.updateValueAndValidity();
            }
        }
    }

    public save = (table : string) => {
        let response = this.backendService.updateCase(this.case_id, table, this.form.getRawValue());
        response.subscribe((data) => {
            this.case = this.form.getRawValue();
            this.setDefaultState();
            switch (data["message"]) {
                case "no change":
                    this.notifService.addNotif({
                        type: "warning",
                        html: `No changes were made to {${table}}`
                    });
                    break;

                default:
                    this.notifService.addNotif({
                        type: "success",
                        html: `Succesfully saved to {${table}}`
                    });
            }
        },
        () => {
            //TODO: Better error reporting
            this.notifService.addNotif({
                type: "error",
                html: `Error saving to {${table}}`
            });
        });
        return response;
    }

    onReset = () => {
        this.form.patchValue(this.case);
        this.notifService.addNotif({
            type: "success",
            html: "All recent changes have been reset."
        });
    }
}

// Checks if the current form value is equal to the previous form value
function equalsValidator(obj : any) : ValidatorFn {
    return (control : AbstractControl): {[key: string]: boolean} | null => {

        // Makes sure that null == '' == undefined and no change is noted
        if (!control.value && !obj) {
            // However, the above statement doesn't work if numbers are being compared
            if (control.value !== 0 && obj !== 0 ) {
                return null;
            }
        }

        if (control.value != obj) {
            return {'equals': true};
        }
        return null;
    }
}
