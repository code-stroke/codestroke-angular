import { Component, OnInit, HostListener, Input, forwardRef, ElementRef, HostBinding } from '@angular/core';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
    selector: 'cs-select-score',
    templateUrl: './select-score.component.html',
    styleUrls: ['./select-score.component.scss'],
    providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => SelectScoreComponent),
          multi: true
        }
    ]
})
export class SelectScoreComponent implements OnInit, ControlValueAccessor {
    icon_down = faSortDown;

    main : string = "";
    value : any = "";
    @Input() options : Array<any>;

    hidden = true;
    @HostBinding('class.active')
    get active() {
        return !this.hidden;
    }

    constructor(private _ef : ElementRef) { }

    ngOnInit() {
        for (let o of this.options) {
            if (o.default) {
                this.onOption(o);
            }
        }
    }

    @HostListener('click', ['$event']) onClick(event) {
        this.hidden = this.hidden ? false : true;
        event.clickedSelect = true;
    }

    /**
     * Detects when you 'lose focus' of the select box
     */
    @HostListener('document:click', ['$event.target']) onClickOut(target) {
        if (!this._ef.nativeElement.contains(target)) {
            if (!this.hidden) {
                this.hidden = true;
            }
        }
    }

    /**
     * Updates the select box value
     */
    onOption(o : any) {
        this.main = o.text;
        this.value = o.value;

        this.onChange(this.value);
    }

    onChange = (value) => {};
    onTouched = () => {};

    setDisabledState?(isDisabled: boolean): void {
        //TODO:
    }
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }
    writeValue(obj: any): void {
        for (let o of this.options) {
            if (o.value == obj) {
                this.onOption(o);
            }
        }
    }

}
