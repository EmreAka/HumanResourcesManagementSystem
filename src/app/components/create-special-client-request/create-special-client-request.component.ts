import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ClientRequestService } from 'src/app/services/client-request.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';
import { DeadlineService } from 'src/app/services/deadline.service';
import { Deadline } from 'src/app/models/deadline';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
    private deadlineService: DeadlineService,
    private router: Router,
    private toastr: ToastrService) { }

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
      categoryId: [null, [Validators.required]],
      deadlineId: [null, [Validators.required]],
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      budget: [null, [Validators.required, Validators.min(0), Validators.max(10000)]],
    });
  }

  addClientRequest() {
    this.spinner.show();

    if (this.clientRequestForm.get("budget")?.hasError("max")) {
      this.toastr.error("Your budget can be maximum of 10000");
      this.spinner.hide();
    }

    else if (!this.clientRequestForm.valid) {
      this.toastr.error("Complete the form")
      this.spinner.hide();
    }

    else {
      this.clientRequestService.addClientRequest(this.clientRequestForm.value).subscribe({
        next: (value) => {
          this.spinner.hide();
          this.router.navigateByUrl('/');
        },
        error: (err) => {
          this.spinner.hide();
        }
      });
    }
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
