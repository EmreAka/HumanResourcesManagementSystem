import { Component, OnInit } from '@angular/core';
import { CategoryService } from "../../services/category.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { JobPostingService } from 'src/app/services/job-posting.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-create-job-posting',
  templateUrl: './create-job-posting.component.html',
  styleUrls: ['./create-job-posting.component.css']
})
export class CreateJobPostingComponent implements OnInit {

  softCategories: Category[];
  selectedSoftCategory: Category;

  constructor(public categoryService: CategoryService, private formBuilder: FormBuilder,
    public jobPostingService: JobPostingService) {
  }

  ngOnInit(): void {
    this.getSoftCategories();
    console.log("hellooo")
    this.createForm();
    // this.jobPostingService.jobPostingForm.controls['userId'].setValue(this.auth.currentUser?.uid);
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
      categoryId: ["", Validators.required],
      title: ["", Validators.required],
      description: ["", Validators.required],
      requirements: ["", Validators.required],
      price: ["", [Validators.required, Validators.min(0)]]
    })
  }

  getSoftCategories() {
    this.categoryService.getCategories().subscribe({
      next: (value) => {
        this.softCategories = value
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  setCurrentSoftCategory(category: any) {
    this.selectedSoftCategory = category;
    this.categoryService.isCategorySelected = true;
    this.jobPostingService.jobPostingForm.controls['categoryId'].setValue(this.selectedSoftCategory.id);
  }

}
