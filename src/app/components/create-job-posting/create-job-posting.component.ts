import {Component, OnInit} from '@angular/core';
import {Category} from "../../models/Category";
import {CategoryService} from "../../services/category.service";
import {DocumentData} from "@angular/fire/compat/firestore";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Auth} from "@angular/fire/auth";

@Component({
  selector: 'app-create-job-posting',
  templateUrl: './create-job-posting.component.html',
  styleUrls: ['./create-job-posting.component.css']
})
export class CreateJobPostingComponent implements OnInit {

  categories: any;
  softCategories: any;
  selectedCategory: any;
  selectedSoftCategory: any;

  jobPostingForm: FormGroup;

  constructor(public categoryService: CategoryService, private formBuilder: FormBuilder, private auth: Auth) {
  }

  ngOnInit(): void {
    this.getCategories();
    this.getSoftCategories();

    this.createForm();
    this.jobPostingForm.controls['userId'].setValue(this.auth.currentUser?.uid);
    this.jobPostingForm.valueChanges.subscribe({
      next: (value) => {
        console.log(value);
        if (this.jobPostingForm.valid) {
          this.categoryService.isCategorySelected = true;
        }
      }
    })

  }

  createForm() {
    this.jobPostingForm = this.formBuilder.group({
      userId: ["", Validators.required],
      categoryId: ["", Validators.required],
      subCategoryId: ["", Validators.required],
      title: ["", Validators.required],
      description: ["", Validators.required],
      requirements: ["", Validators.required],
      price: ["", [Validators.required, Validators.min(0)]]
    })
  }

  getStyle(id: any) {
    if (id == this.selectedCategory?.id) {
      return "box-shadow: 0px 0px 20px 1px #3E497A;"
    }
    return ""
  }

  setSelectedCategory(category: Category) {
    this.selectedCategory = category;
    this.categoryService.selectedCategory = category;
    this.categoryService.isCategorySelected = true;

    this.jobPostingForm.controls['categoryId'].setValue(this.selectedCategory.id);
  }

  getCategories() {
    this.categoryService.getCategories().subscribe({
      next: (value) => {
        this.categories = value;
        console.log(value);
      }
    })
  }

  getSoftCategories() {
    this.categoryService.getSoftwareDevelopmentCategories().subscribe({
      next: (value) => {
        this.softCategories = value
      }
    })
  }

  setCurrentSoftCategory(category: any) {
    this.selectedSoftCategory = category;
    this.categoryService.isCategorySelected = true;
    this.jobPostingForm.controls['subCategoryId'].setValue(this.selectedSoftCategory.id);
  }

}
