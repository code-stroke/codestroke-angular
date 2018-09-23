import { Component, OnInit, Input, HostBinding, SimpleChanges } from '@angular/core';
import { CaseDetails } from '../../case-details';

@Component({
    selector: '[csListContainer]',
    templateUrl: './list-container.component.html',
    styleUrls: ['./list-container.component.scss']
})
export class ListContainerComponent implements OnInit {
    @HostBinding('class')
    @Input() status : "incoming" | "active" | "completed";

    private _cases : CaseDetails[];
    @Input()
    set cases( list : CaseDetails[]) {
        this._cases = list.filter(c => c.status == this.status);
    }
    get cases() {
        return this._cases;
    }

    constructor() { }

    ngOnInit() {
        //console.log(status);
    }

    ngOnChanges(changes : SimpleChanges) {

    }

}
