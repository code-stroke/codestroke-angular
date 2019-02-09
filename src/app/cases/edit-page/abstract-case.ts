import { FormGroup } from "@angular/forms";
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
            for (let [key, value] of Object.entries(data.case)) {
                //TODO:
            }
        });
    }

    public save = (table : string) => {
        let response = this.backendService.updateCase(this.case_id, table, this.form.getRawValue());
        response.subscribe((data) => {
            this.case = this.form.getRawValue();
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
