import { Component } from '@angular/core';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faBellSlash } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'cs-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    icon_bars = faBars;
    icon_bell_slash = faBellSlash;
    icon_signout = faSignOutAlt;
}
