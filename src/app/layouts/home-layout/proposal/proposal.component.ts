import { Component, OnInit } from '@angular/core';
import { ProposalService } from 'src/app/services/proposal.service';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.css']
})
export class ProposalComponent implements OnInit {

  isModelOpen: boolean = false;

  constructor(private proposalService: ProposalService) { }

  ngOnInit(): void {
    this.proposalService.isModelOpen.subscribe({
      next: (value) => {
        if (value) {
          this.isModelOpen = true;
        } else {
          this.isModelOpen = false;
        }
      }
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

}
