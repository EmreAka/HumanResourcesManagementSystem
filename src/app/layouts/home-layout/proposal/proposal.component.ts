import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Deadline } from 'src/app/models/deadline';
import { DeadlineService } from 'src/app/services/deadline.service';
import { ProposalService } from 'src/app/services/proposal.service';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.css']
})
export class ProposalComponent implements OnInit {
  isModelOpen: boolean = false;
  proposalForm: FormGroup;
  deadlines: Deadline[];

  constructor(private proposalService: ProposalService,
    private fb: FormBuilder, private deadlineService: DeadlineService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    //refactor
    this.proposalService.isModelOpen.subscribe({
      next: (value) => {
        if (value) {
          this.isModelOpen = true;
        } else {
          this.isModelOpen = false;
        }
      }
    });

    this.createProposalForm();
    this.getDeadlines();
    this.proposalForm.valueChanges.subscribe({ next: (value) => console.log(value) })
  }

  getDeadlines() {
    this.spinner.show();
    this.deadlineService.getDeadlines().subscribe({
      next: (value) => {
        this.deadlines = value;
        this.spinner.hide();
      },
      error: (err) => this.spinner.hide()
    });
  }

  createProposalForm() {
    this.proposalForm = this.fb.group({
      message: ["", [Validators.required]],
      budget: [1, [Validators.required, Validators.min(1), Validators.max(100000)]],
      deadlineId: [null, [Validators.required]]
    });
  }

  getClass() {
    if (this.isModelOpen) {
      return "modelOpen"
    }
    return "modal"
  }

  closeProposalModal() {
    this.proposalService.closeModel();
  }

  addProposal() {
    this.spinner.show();
    const proposal = Object.assign(this.proposalForm.value,
      {
        clientRequestId: this.proposalService.proposalClientInfo.clientRequestId,
        clientId: this.proposalService.proposalClientInfo.clientId
      });

    this.proposalService.addProposal(proposal).subscribe({
      next: (value) => {
        this.spinner.hide();
      },
      error: (err) => {
        this.spinner.hide();
      }
    });
  }

}
