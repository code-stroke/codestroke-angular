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
}
