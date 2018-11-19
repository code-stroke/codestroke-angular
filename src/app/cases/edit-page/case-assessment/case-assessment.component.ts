import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractCaseComponent } from '../abstract-case';
import { EditStatusService } from '../edit-status.service';
import { BackendCaseService } from '../../backend-case.service';
import { NotifService } from '../../../notif.service';
import { PopupService } from '../popup.service';

@Component({
    selector: 'cs-case-assessment',
    templateUrl: './case-assessment.component.html',
    styleUrls: ['./case-assessment.component.scss']
})
export class CaseAssessmentComponent extends AbstractCaseComponent implements OnInit {
    static backendTable = "case_assessments";

    radioYNU = [
        { value: "yes", text: "Yes", class: "yes" },
        { value: "no", text: "No", class: "no" },
        { value: "unknown", text: "Unknown", class: "unknown" }
    ];
    radioHR = [
        { value: "regular", text: "Regular", class: "yes" },
        { value: "irregular", text: "Irregular", class: "no" },
        { value: "unknown", text: "Unknown", class: "unknown" }
    ];

    selectFacial = [
        { text: "Absent", value: "0"},
        { text: "Mild", value: "1"},
        { text: "Mod-Severe", value: "2"}
    ];
    selectRaceLimb = [
        { text: "Normal-Mild", value: "0"},
        { text: "Mod", value: "1"},
        { text: "Severe", value: "2"}
    ];
    selectHead = [
        { text: "Absent", value: "0"},
        { text: "Present", value: "1"}
    ];
    radioHemi = [
        { value: "left", text: "Left", class: "unknown" },
        { value: "right", text: "Right", class: "unknown" },
        { value: "unknown", text: "Unknown", class: "unknown" }
    ];
    selectConscious = [
        { text: "Alert", value: "0"},
        { text: "Minor Stimulation", value: "1"},
        { text: "Repeated Stimulation", value: "2"},
        { text: "Movement to Pain", value: "3"},
        { text: "Postures or Unresponsive", value: "4"}
    ];
    selectMonth = [
        { text: "Both Correct", value: "0"},
        { text: "1 Correct", value: "1"},
        { text: "2 Correct", value: "2"}
    ];
    selectSqueeze = [
        { text: "Both Correct", value: "0"},
        { text: "1 Correct", value: "1"},
        { text: "2 Correct", value: "2"}
    ];
    selectHorizontal = [
        { text: "Normal", value: "0"},
        { text: "Partial Palsy", value: "1"},
        { text: "Forced Gaze Palsy", value: "2"}
    ];
    selectVisual = [
        { text: "Normal", value: "0"},
        { text: "Partial Hemianopia", value: "1"},
        { text: "Complete Hemianopia", value: "2"},
        { text: "Bilateral Hemianopia", value: "3"}
    ];
    selectFacialNihss = [
        { text: "Normal", value: "0"},
        { text: "Minor Paralysis", value: "1"},
        { text: "Partial Paralysis", value: "2"},
        { text: "Unilateral/Bilateral Compelete Paralysis", value: "3"}
    ];
    selectDrift = [
        { text: "No drift for 10 seconds", value: "0"},
        { text: "Mild Drift", value: "1"},
        { text: "Drift/Some effort against gravity", value: "2"},
        { text: "No effort against gravity", value: "3"},
        { text: "No Movement", value: "4"}
    ];
    selectAtaxia = [
        { text: "No Ataxia / Paralysed / Amputation / Does not Understand", value: "0"},
        { text: "1 Limb", value: "1"},
        { text: "2 Limbs", value: "2"}
    ];
    selectSensation = [
        { text: "Normal", value: "0"},
        { text: "Mild-Moderate Loss", value: "1"},
        { text: "Complete/Unresponsive", value: "2"},
    ];
    selectAphasia = [
        { text: "Normal", value: "0"},
        { text: "Mild-Moderate", value: "1"},
        { text: "Severe Aphasia (Fragmentary Expression)", value: "2"},
        { text: "Mute/Global Aphasia/Unresponsive", value: "3"}
    ];
    selectDysarthria = [
        { text: "Normal/Intubated", value: "0"},
        { text: "Mild-Moderate", value: "1"},
        { text: "Severe/Mute", value: "2"},
    ];
    selectExtinction = [
        { text: "Normal", value: "0"},
        { text: "Inattention to 1 Modality/Bilaterally", value: "1"},
        { text: "Profound Neglect/More than 1 Modality", value: "2"},
    ];
    selectRankin = [
        { text: "No Symptoms", value: "0"},
        { text: "No disability despite symptoms", value: "1"},
        { text: "Slight disability but independent", value: "2"},
        { text: "Moderate disability but able to walk", value: "3"},
        { text: "Mod to Severe disability requiring assistance", value: "4"},
        { text: "Bedridden", value: "5"},
    ]

    constructor(private fb : FormBuilder,
                private ar: ActivatedRoute,
                private statusService : EditStatusService,
                private bs : BackendCaseService,
                private router : Router,
                private ns : NotifService,
                private ps : PopupService) {
        super();

        this.form = this.fb.group({
            facial_droop: ['',Validators.pattern('(no|yes|unknown)')],
            arm_drift: ['',Validators.pattern('(no|yes|unknown)')],
            weak_grip: ['',Validators.pattern('(no|yes|unknown)')],
            speech_difficulty: ['',Validators.pattern('(no|yes|unknown)')],
            bp_systolic: [''],
            bp_diastolic: [''],
            heart_rate: [''],
            heart_rhythm: ['',Validators.pattern('(regular|irregular|unknown)')],
            rr: [''],
            o2sats: [''],
            temp: [''],
            gcs: [''],
            blood_glucose: [''],
            facial_palsy_race: [''],
            arm_motor_impair: [''],
            leg_motor_impair: [''],
            head_gaze_deviate: [''],
            hemiparesis: ['', Validators.pattern('(left|right|unknown)')],
            cannula: ['', Validators.pattern('(yes|no|unknown)')],
            conscious_level: [''],
            month_age: [''],
            blink_squeeze: [''],
            horizontal_gaze: [''],
            visual_fields: [''],
            facial_palsy_nihss: [''],
            left_arm_drift: [''],
            right_arm_drift: [''],
            left_leg_drift: [''],
            right_leg_drift: [''],
            limb_ataxia: [''],
            sensation: [''],
            aphasia: [''],
            dysarthria: [''],
            neglect: [''],
            rankin_conscious: [''],
            likely_lvo: ['']
        });

        this.route = ar;
        this.backendService = bs;
        this.notifService = ns;
        this.ps = ps;
    }

    ngOnInit() {
        super.ngOnInit();

        this.checkScore(this.form.getRawValue());

        this.form.valueChanges.subscribe(val => {
            this.checkScore(val);
        });
    }

    race = 0;
    nihss = 0;
    rankin = 0;
    checkScore(val) {
        this.race = 0;
        this.race += parseInt(val.facial_palsy_race);
        this.race += parseInt(val.arm_motor_impair);
        this.race += parseInt(val.leg_motor_impair);
        this.race += parseInt(val.head_gaze_deviate);

        this.nihss = 0;
        this.nihss += parseInt(val.conscious_level);
        this.nihss += parseInt(val.month_age);
        this.nihss += parseInt(val.blink_squeeze);
        this.nihss += parseInt(val.horizontal_gaze);
        this.nihss += parseInt(val.visual_fields);
        this.nihss += parseInt(val.facial_palsy_nihss);
        this.nihss += parseInt(val.left_arm_drift);
        this.nihss += parseInt(val.right_arm_drift);
        this.nihss += parseInt(val.left_leg_drift);
        this.nihss += parseInt(val.right_leg_drift);
        this.nihss += parseInt(val.limb_ataxia);
        this.nihss += parseInt(val.sensation);
        this.nihss += parseInt(val.aphasia);
        this.nihss += parseInt(val.dysarthria);
        this.nihss += parseInt(val.neglect);

        this.rankin = 0;
        this.rankin += parseInt(val.rankin_conscious);
    }

    onSave = () => {
        this.save(CaseAssessmentComponent.backendTable);
    }
}
