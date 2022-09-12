import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientRequestService } from 'src/app/services/client-request.service';
import {NgxSpinnerService} from 'ngx-spinner';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';
import { DeadlineService } from 'src/app/services/deadline.service';
import { Deadline } from 'src/app/models/deadline';

@Component({
  selector: 'app-create-special-client-request',
  templateUrl: './create-special-client-request.component.html',
  styleUrls: ['./create-special-client-request.component.css']
})
export class CreateSpecialClientRequestComponent implements OnInit {

  clientRequestForm: FormGroup;
  categories: Category[];
  deadlines: Deadline[];

  constructor(private fb: FormBuilder,
    private clientRequestService: ClientRequestService,
    private spinner: NgxSpinnerService,
    private categoryService: CategoryService,
    private deadlineService: DeadlineService) { }

  ngOnInit(): void {
    this.createForm();
    this.getSoftwareCategories();
    this.getDeadlines();
    this.clientRequestForm.valueChanges.subscribe({
      next: (value) => {
        console.log(value);
      }
    })
  }

  createForm() {
    this.clientRequestForm = this.fb.group({
      categoryId: [0, [Validators.required]],
      deadlineId: [0, [Validators.required]],
      title: ["", [Validators.required]],
      description: ["", [Validators.required]],
      deadline: ["", [Validators.required]],
      budget: [null, [Validators.required, Validators.min(0)]],
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

  getSoftwareCategories() {
    this.spinner.show();
    this.categoryService.getCategories().subscribe({
      next: (value) => {
        this.categories = value;
        this.spinner.hide();
      },
      error: (err) => {
        console.log(err);
        this.spinner.hide();
      }
    });
  }

  getDeadlines() {
    this.spinner.show();
    this.deadlineService.getDeadlines().subscribe({
      next: (value) => {
        this.deadlines = value;
        this.spinner.hide();
      },

      error: (err) => {
        console.log(err);
        this.spinner.hide();
      }
    });
  }

}
