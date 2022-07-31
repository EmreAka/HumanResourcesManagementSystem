import {Component, OnInit} from '@angular/core';
import {Category} from "../../models/Category";
import {CategoryService} from "../../services/category.service";
import {DocumentData} from "@angular/fire/compat/firestore";

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

  constructor(public categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getCategories();
    this.getSoftCategories();
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

  setCurrentSoftCategory(category: any){
    this.selectedSoftCategory = category;
    this.categoryService.isCategorySelected = true;
  }

}
