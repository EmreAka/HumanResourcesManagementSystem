import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientRequestService } from 'src/app/services/client-request.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-create-special-client-request',
  templateUrl: './create-special-client-request.component.html',
  styleUrls: ['./create-special-client-request.component.css']
})
export class CreateSpecialClientRequestComponent implements OnInit {

  clientRequestForm: FormGroup;
  constructor(private fb: FormBuilder,
    private clientRequestService: ClientRequestService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.clientRequestForm = this.fb.group({
      title: ["", [Validators.required]],
      description: ["", [Validators.required]],
      deadline: ["", [Validators.required]],
      budget: [0, [Validators.required, Validators.min(0)]],
    });
  }

  addClientRequest() {
    this.spinner.show();
    this.clientRequestService.addClientRequest(this.clientRequestForm.value).subscribe({
      next: (value) => {
        this.spinner.hide();
      },
      error: (err) => {
        this.spinner.hide();
      }
    });
  }

}
