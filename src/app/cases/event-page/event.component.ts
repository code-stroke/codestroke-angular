import { Component, OnInit, Input } from '@angular/core';
import { faUserEdit, faUserPlus, faAmbulance, faMedkit, faXRay, faBrain, faLaptop, faDiagnoses, faHospital, faUsers, faCapsules, faSyringe, faCogs, faPenSquare, faPlusSquare, faEdit, faPlus, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '../../../../node_modules/@fortawesome/free-regular-svg-icons';

@Component({
    selector: 'cs-event',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
    @Input() event : any;
    metadata;
    data;

    icon_edit = faEdit;
    icon_add = faPlus;

    icon_roles = {
        paramedic: faAmbulance,
        ed_clinician: faMedkit,
        radiographer: faXRay,
        stroke_team: faBrain,
        radiologist: faLaptop,
        stroke_ward: faHospital,
        neuroint: faDiagnoses,
        angio_nurse: faUsers,
        anaesthestist: faSyringe,
        admin: faCogs,
        other: faQuestionCircle
    }

    icon_go = faArrowCircleRight;

    state : "number"|"date" = "number";


    constructor() {

    }

    ngOnInit() {
        this.metadata = JSON.parse(this.event.event_metadata);
        this.data = JSON.parse(this.event.event_data);
    }

    active = false;
    onClick() {
        this.active = this.active ? false : true;
    }

    humaniseString(str : string) {
        return str.split('_').map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
    }

    createFullName(first, last) {
        if (first && last) {
            return `${first} ${last}`;
        } else if (first) {
            return `${first}`;
        } else if (last) {
            return `${last}`;
        } else {
            return '-';
        }
    }

    getTableName() {
        if (this.event.event_type != 'edit') {
            return "";
        }

        switch (this.metadata.info_table) {
            case "cases":
                return "Details";
            case "case_histories":
                return "History";
            case "case_eds":
                return "ED";
            case "case_assessments":
                return "Assessment";
            case "case_radiologies":
                return "Radiology";
            case "case_managements":
                return "Management";
            default:
                return "Unknown";
        }
    }

    getStatus() {
        // If status has been altered, display the new status
        if (this.data.status) {
            return this.data.status;
        } else {
            return this.metadata.status;
        }
    }

    getAge() {
        if (!this.metadata.dob) {
            return "??";
        }

        let agemilli = new Date().getTime() - new Date(this.metadata.dob).getTime();
        return Math.floor(agemilli / 31536000000);
    }
    getAgeGender() {
        if (this.metadata.gender) {
            return this.getAge() + "" + this.metadata.gender.toUpperCase();
        } else {
            return this.getAge() + "U";
        }

    }

    getRouterLink() {
        if (this.event.event_type == 'add') {
            return `/cases/edit/${this.metadata.case_id}/`;
        } else {
            return `/cases/edit/${this.metadata.case_id}/${this.getTableName().toLowerCase()}`
        }
    }
}
