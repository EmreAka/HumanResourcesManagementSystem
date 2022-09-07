import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientRequestService } from 'src/app/services/client-request.service';
import {NgxSpinnerService} from 'ngx-spinner';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-create-special-client-request',
  templateUrl: './create-special-client-request.component.html',
  styleUrls: ['./create-special-client-request.component.css']
})
export class CreateSpecialClientRequestComponent implements OnInit {

  clientRequestForm: FormGroup;
  categories: Category[];

  constructor(private fb: FormBuilder,
    private clientRequestService: ClientRequestService,
    private spinner: NgxSpinnerService,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.createForm();
    this.getSoftwareCategories();
    this.clientRequestForm.valueChanges.subscribe({
      next: (value) => {
        console.log(value);
      }
    })
  }

  createForm() {
    this.clientRequestForm = this.fb.group({
      categoryId: [0, [Validators.required]],
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

}
