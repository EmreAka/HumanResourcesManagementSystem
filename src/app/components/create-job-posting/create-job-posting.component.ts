import { Component, OnInit } from '@angular/core';
import { Category } from "../../models/Category";
import { CategoryService } from "../../services/category.service";
import { DocumentData } from "@angular/fire/compat/firestore";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Auth } from "@angular/fire/auth";
import { JobPostingService } from 'src/app/services/job-posting.service';

@Component({
  selector: 'app-create-job-posting',
  templateUrl: './create-job-posting.component.html',
  styleUrls: ['./create-job-posting.component.css']
})
export class CreateJobPostingComponent implements OnInit {

  categories: any;
  softCategories: any;
  selectedSoftCategory: any;

  constructor(public categoryService: CategoryService, private formBuilder: FormBuilder,
    private auth: Auth, public jobPostingService: JobPostingService) {
  }

  ngOnInit(): void {
    this.getSoftCategories();

    this.createForm();
    this.jobPostingService.jobPostingForm.controls['userId'].setValue(this.auth.currentUser?.uid);
    this.jobPostingService.jobPostingForm.valueChanges.subscribe({
      next: (value) => {
        console.log(value);
        if (this.jobPostingService.jobPostingForm.valid) {
          this.categoryService.isCategorySelected = true;
        }
      }
    })

  }

  createForm() {
    this.jobPostingService.jobPostingForm = this.formBuilder.group({
      userId: ["", Validators.required],
      categoryId: ["", Validators.required],
      title: ["", Validators.required],
      description: ["", Validators.required],
      requirements: ["", Validators.required],
      price: ["", [Validators.required, Validators.min(0)]]
    })
  }

  getSoftCategories() {
  }

  setCurrentSoftCategory(category: any) {
    this.selectedSoftCategory = category;
    this.categoryService.isCategorySelected = true;
    this.jobPostingService.jobPostingForm.controls['categoryId'].setValue(this.selectedSoftCategory.id);
  }

}
