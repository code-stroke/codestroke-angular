import { Component, OnInit } from '@angular/core';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faBellSlash } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'cs-main-layout',
    templateUrl: './main-layout.component.html',
    styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
    icon_bars = faBars;
    icon_bell_slash = faBellSlash;
    icon_signout = faSignOutAlt;

    constructor() { }

    ngOnInit() {
    }

}
