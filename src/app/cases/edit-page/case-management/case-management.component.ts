import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractCaseComponent } from '../abstract-case';
import { EditStatusService } from '../edit-status.service';
import { BackendCaseService } from '../../backend-case.service';
import { NotifService } from '../../../notif.service';
import { PopupService } from '../popup.service';
import { CaseDetailsComponent } from '../case-details/case-details.component';
import { formatDate } from '@angular/common';
import { CaseDetails } from '../../case-details';

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
                public statusService : EditStatusService,
                private bs : BackendCaseService,
                private router : Router,
                private ns : NotifService,
                private ps : PopupService,
                @Inject(LOCALE_ID) private locale: string) {
        super();

        this.form = this.fb.group({
              thrombolysis: [null],
              //added these in, not sure if i have to link these to anything else
              age18: [null],
              lvo: [null],
              onset: [null],
              ich: [null],

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
              conservative_rx: [null],


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
          console.log(this.statusService.status.value);
          let instance = this;
          this.popupService.popup.next({
              html: `Are you sure you want to mark the case as completed?
                    The current time of completion will be recorded and in future versions, this will lock all data from future editing.`,
              buttons: [
                  {
                      class: "primary",
                      text: "Complete",
                      click: function() {
                          instance.save(CaseManagementComponent.backendTable).subscribe(
                              () => instance.completeCase()
                          );
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
          });
      }

      private completeCase() {
          let statusData = {
              status: "completed",
              completed_timestamp: formatDate(new Date(), "yyyy-MM-dd HH:mm", this.locale)
          };

          this.backendService.updateCase(this.case.case_id, CaseDetailsComponent.backendTable, statusData)
          .subscribe(
              () => {
                  this.notifService.addNotif({
                      type: "success",
                      html: `Succesfully marked this case as Completed.`
                  });
                  this.updateStatus(statusData);
              },
              () => {
                  this.notifService.addNotif({
                      type: "error",
                      html: `Error marking case as Completed.`
                  });
              }
          );
      }

      private updateStatus(statusData) {
          let caseDetail = Object.assign(new CaseDetails(), statusData);

          this.statusService.status.next(caseDetail.status);
          this.statusService.statusTime.next(caseDetail.getStatusTime());
      }
}
