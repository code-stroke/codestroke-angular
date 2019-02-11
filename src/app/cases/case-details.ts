export class CaseDetails {
    case_id : number;
    first_name ?: string;
    last_name ?: string;
    dob ?: Date;
    address ?: string;
    gender : "m" | "f" | "u" = "u";
    last_well ?: Date;
    nok ?: string;
    nok_phone ?: string;
    medicare_no ?: string;
    initial_location_lat ?: number;
    initial_location_long ?: number;
    eta ?: Date;
    status : "incoming" | "active" | "completed" = "incoming";
    incoming_timestamp ?: Date;
    active_timestamp ?: Date;
    completed_timestamp ?: Date;

    test : string = "Woooo";

    static create(obj) : CaseDetails {
        return Object.assign(new CaseDetails(), obj);
    }

    // TODO: Cleaner/smarter way of doing this?
    getName() {
        if (this.first_name && this.last_name) {
            return `${this.first_name} ${this.last_name}`;
        } else if (this.first_name) {
            return `${this.first_name}`;
        } else if (this.last_name) {
            return `${this.last_name}`;
        } else {
            return '';
        }
    }

    getAge() {
        if (!this.dob) {
            return "??";
        }

        let agemilli = new Date().getTime() - new Date(this.dob).getTime();
        return Math.floor(agemilli / 31536000000);
    }
    getAgeGender() {
        return this.getAge() + "" + this.gender.toUpperCase();
    }

    getStatusTime() : any {
        switch (this.status) {
            case "incoming":
                return this.eta;
            case "active":
                return this.active_timestamp;
            case "completed":
                return this.completed_timestamp;
        }
    }

    static toDBDate(date : Date) {
        function pad(number) {
            if (number < 10) {
                return '0' + number;
            }
            return number;
        }

        return date.getFullYear()
                + "-" + pad(date.getMonth() + 1)
                + "-" + pad(date.getDate());

    }

    static toDBDateTime(date : Date) {
        function pad(number) {
            if (number < 10) {
                return '0' + number;
            }
            return number;
        }

        return this.toDBDate(date)
                + " " + pad(date.getHours())
                + ":" + pad(date.getMinutes());
    }
}
