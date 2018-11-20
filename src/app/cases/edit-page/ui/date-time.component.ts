import { Component, OnInit, forwardRef, HostBinding, Inject, LOCALE_ID } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { formatDate } from '@angular/common';

@Component({
  selector: 'cs-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.scss'],
  providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DateTimeComponent),
        multi: true
      }
  ]
})
export class DateTimeComponent implements OnInit, ControlValueAccessor {

  constructor(@Inject(LOCALE_ID) private locale: string) { }

  ngOnInit() {
  }

  val : string;
  date : any;
  time : any;

  @HostBinding('class.invalid') invalid: boolean = false;

  update() {
      if (this.date && this.time) {
          this.invalid = false;
          this.val = formatDate(new Date(this.date + " " + this.time), "yyyy-MM-dd HH:mm", this.locale);
      } else {
          this.val = null;
          this.invalid = true;
      }
      this.onChange(this.val);
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
      if (obj) {
          let d = new Date(obj);
          this.val = formatDate(d, "yyyy-MM-dd HH:mm", this.locale);
          this.date = formatDate(d, "yyyy-MM-dd", this.locale);
          this.time = formatDate(d, "HH:mm", this.locale);
      }
  }

}
