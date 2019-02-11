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
        let sortFn;
        switch (this.status) {
            case "incoming":
                // Orders by the earliest ETA
                // If an ETA is null, it should go to the bottom
                sortFn = (a,b) => {
                    if (!a.eta && !b.eta) {
                        return 0;
                    }
                    if (!a.eta) {
                        return 1;
                    }
                    if (!b.eta) {
                        return -1;
                    }

                    return new Date(a.eta).getTime() - new Date(b.eta).getTime();
                }
                break;
            case "active":
                // Orders by the latest arrival time (ie. most recently arrived)
                // If a time is null, it should go to the bottom
                sortFn = (a,b) => {
                    return new Date(b.active_timestamp).getTime() - new Date(a.active_timestamp).getTime();
                }
                break;
            case "completed":
                // Orders by the latest completion time (ie. most recently completed)
                // If a time is null, it should go to the bottom
                sortFn = (a,b) => {
                    return new Date(b.completed_timestamp).getTime() - new Date(a.completed_timestamp).getTime();
                }
                break;
        }
        this._cases.sort(sortFn);
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
