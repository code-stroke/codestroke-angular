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

    current : any = {text: "", value: ""};
    main : string = "";
    value : any = "";

    // The actual options are a COPY of the array passed in
    @Input("options") _options : Array<any>;
    options : Array<any>;

    hidden = true;
    @HostBinding('class.active')
    get active() {
        return !this.hidden;
    }

    constructor(private _ef : ElementRef) { }

    ngOnInit() {
        // Deep copies the Options array passed in
        // This ensures that the 'selected' characteristic can be tracked without
        // affecting any other Select entity
        this.options = JSON.parse(JSON.stringify(this._options));

        for (let o of this.options) {
            if (o.default) {
                this.onOption(o);
            }
        }
    }

    @HostListener('click', ['$event']) onClick(event) {
        if (!this.disabled) {
            this.hidden = this.hidden ? false : true;
            event.clickedSelect = true;
        }
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
        this.current.selected = false;

        this.current = o;
        this.current.selected = true;

        this.main = o.text;
        this.value = o.value;

        this.onChange(this.value);
    }

    onChange = (value) => {};
    onTouched = () => {};

    @HostBinding('class.disabled') disabled = false;

    setDisabledState?(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }
    writeValue(obj: any): void {
        // This sets the value to *empty* when eg. clicking the reset button
        if (!obj && obj !== 0) {
            this.onOption({text: "", value: ""});
            return;
        }

        for (let o of this.options) {
            if (o.value == obj) {
                this.onOption(o);
            }
        }
    }

}
