import { Component, OnInit, Input, HostBinding, SimpleChanges } from '@angular/core';
import { CaseDetails } from '../../case-details';
import { Router, ActivatedRoute } from '@angular/router';

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

    get time() {
        switch (this.status) {
            case "incoming":
                return "ETA";
            case "active":
                return "Arrived";
            case "completed":
                return "Completed";

        }
    }

    constructor(private router : Router, private route : ActivatedRoute) { }

    ngOnInit() {

    }

    onClick(case_id : number) {
        this.router.navigate([`../edit/${case_id}`], { relativeTo: this.route});
    }

}
