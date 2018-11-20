import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractCaseComponent } from '../abstract-case';
import { EditStatusService } from '../edit-status.service';
import { BackendCaseService } from '../../backend-case.service';
import { NotifService } from '../../../notif.service';
import { PopupService } from '../popup.service';

@Component({
  selector: 'cs-case-management',
  templateUrl: './case-management.component.html',
  styleUrls: ['./case-management.component.scss']
})
export class CaseManagementComponent extends AbstractCaseComponent implements OnInit {
    static backendTable = "case_managements";

    radioYN = [
        { value: 1, text: "Yes", class: "yes" },
        { value: 0, text: "No", class: "no" }
    ];

    constructor(private fb : FormBuilder,
                private ar: ActivatedRoute,
                private statusService : EditStatusService,
                private bs : BackendCaseService,
                private router : Router,
                private ns : NotifService,
                private ps : PopupService) {
        super();

        this.form = this.fb.group({
              thrombolysis: [null],
              new_trauma_haemorrhage: [null],
              uncontrolled_htn: [null],
              history_ich: [null],
              known_intracranial: [null],
              active_bleed: [null],
              endocarditis: [null],
              bleeding_diathesis: [null],
              abnormal_blood_glucose: [null],
              rapidly_improving: [null],
              recent_trauma_surgery: [null],
              recent_active_bleed: [null],
              seizure_onset: [null],
              recent_arterial_puncture: [null],
              recent_lumbar_puncture: [null],
              post_acs_pericarditis: [null],
              pregnant: [null],
              thrombolysis_time_given: [null],
              ecr: [null],
              surgical_rx: [null],
              conservative_rx: [null]
          });

          this.route = ar;
          this.backendService = bs;
          this.notifService = ns;
          this.popupService = ps;
      }

      ngOnInit() {
          super.ngOnInit();
      }

      onSave = () => {
          this.save(CaseManagementComponent.backendTable);
      }

      onThromb = () => {
          this.form.get("thrombolysis_time_given").setValue(new Date());
      }

      onComplete() {
          this.popupService.popup.next({
              html: `Are you sure you want to mark the case as completed?
                    All data will be locked from editing and the current time of completion will be recorded.`,
              buttons: [
                  {
                      class: "primary",
                      text: "Complete",
                      click: function() {
                          //TODO
                      }
                  },
                  {
                      class: "tertiary",
                      text: "Cancel",
                      click: function() {
                          //TODO
                      }
                  }
              ]
          })
      }
}
