import { Component, OnInit, Input, forwardRef, HostBinding } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'cs-toggle',
    templateUrl: './toggle.component.html',
    styleUrls: ['./toggle.component.scss'],
    providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => ToggleComponent),
          multi: true
        }
    ]
})
export class ToggleComponent implements OnInit, ControlValueAccessor {
    @Input() name : string;
    @Input() options : Array<any>;

    val : any;

    disabled : boolean = false;

    constructor() { }

    ngOnInit() {
    }

    update() {
        this.onChange(this.val);
    }

    onChange;
    onTouched;

    setDisabledState?(isDisabled: boolean): void {
        //TODO:
        this.disabled = isDisabled;
    }
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }
    writeValue(obj: any): void {
        if (!this.disabled) {
            this.val = obj;
        }
    }



}
