import { FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';

import { ServiceLocator } from 'src/app/util/service-locator';

import { BackendCaseService } from '../backend-case.service';
import { NotifService } from '../../notif.service';
import { LoadingService } from '../../loading.service';
import { PopupService } from 'src/app/popup.service';
import { EditStatusService } from './edit-status.service';



export class AbstractCaseComponent implements OnInit {
    static backendTable: string;

    route: ActivatedRoute;
    case_id: number;
    case: any;
    form: FormGroup;

    backendService: BackendCaseService = ServiceLocator.get(BackendCaseService);
    notifService: NotifService = ServiceLocator.get(NotifService);
    popupService: PopupService = ServiceLocator.get(PopupService);
    loadingService: LoadingService = ServiceLocator.get(LoadingService);
    editStatusService: EditStatusService = ServiceLocator.get(EditStatusService);

    constructor (r: ActivatedRoute) {
        this.route = r;
    }

    ngOnInit() {
        this.route.data
        .subscribe((data: any) => {
            this.case = data.case;
            this.case_id = this.case.case_id;
            this.form.patchValue(data.case);
            console.log(data.case);
            this.setDefaultState();
        });
    }

    setDefaultState() {
        for (const [key, value] of Object.entries(this.case)) {
            const control = this.form.get(key);
            if (control) {
                control.setValidators([equalsValidator(value)]);
                control.updateValueAndValidity();
            }
        }
        if (this.editStatusService.status.value === 'completed') {
            this.form.disable();
        }
    }

    public getBackendTable(): string {return null;}

    public save = () => {
        const table = this.getBackendTable();
        const response = this.backendService.updateCase(this.case_id, table, this.form.getRawValue());
        response.subscribe((data) => {
            this.case = this.form.getRawValue();
            this.setDefaultState();
            switch (data['message']) {
                case 'no change':
                    this.notifService.addNotif({
                        type: 'warning',
                        html: `No changes were made to {${table}}`
                    });
                    break;

                default:
                    this.notifService.addNotif({
                        type: 'success',
                        html: `Succesfully saved to {${table}}`
                    });
            }
        },
        () => {
            // TODO: Better error reporting
            this.notifService.addNotif({
                type: 'error',
                html: `Error saving to {${table}}`
            });
        });
        return response;
    }

    onReset = () => {
        this.form.patchValue(this.case);
        this.notifService.addNotif({
            type: 'success',
            html: 'All recent changes have been reset.'
        });
    }

    public canDeactivate(): Observable<boolean> | boolean {
        // If there have been no changes, then can change page
        if (this.form.valid || this.form.disabled) {
            return true;
        }

        // If there have been changes, need to confirm the move
        const result = new Subject<boolean>();
        this.popupService.popup.next({
            text: `
You have unsaved changes on this page which will be lost if you navigate away.\n\n
Are you sure you want to continue?
                    `,
            buttons: [
                {
                    class: 'primary',
                    text: 'Discard Changes',
                    click: () => {
                        this.onReset();
                        result.next(true);
                    }
                },
                {
                    class: 'secondary',
                    text: 'Save Changes',
                    click: () => {
                        this['onSave']();
                        result.next(true);
                        /*this.save().subscribe(() => {
                            result.next(true);
                        },
                        () => {
                            result.next(false);
                        });*/
                    }
                },
                {
                    class: 'tertiary',
                    text: 'Cancel',
                    click: () => {
                        result.next(false);
                    }
                }
            ]
        });
        return result;
    }
}

// Checks if the current form value is equal to the previous form value
function equalsValidator(obj: any): ValidatorFn {
    return (control: AbstractControl): {[key: string]: boolean} | null => {

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
    };
}
