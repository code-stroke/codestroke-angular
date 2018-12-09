import { Component, OnInit } from '@angular/core';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faBellSlash } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import { HeaderService } from './header.service';

@Component({
  selector: 'cs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    icon_bars = faBars;
    icon_bell = faBell;
    icon_bell_slash = faBellSlash;
    icon_signout = faSignOutAlt;

    constructor(private hs : HeaderService) { }

    ngOnInit() {
    }

    onClick() {
        this.hs.toggleMenu();
    }

}
