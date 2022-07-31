import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-create-job-posting-layout',
  templateUrl: './create-job-posting-layout.component.html',
  styleUrls: ['./create-job-posting-layout.component.css']
})
export class CreateJobPostingLayoutComponent implements OnInit {

  constructor(public categoryService: CategoryService) { }

  ngOnInit(): void {
  }

  getStyle(){
    if (this.categoryService.isCategorySelected){
      return "background-color: #F1D00A"
    }
    return "disabled"
  }

  nextStage(){
    if (this.categoryService.isCategorySelected){
      this.categoryService.stage += 1;
      this.categoryService.isCategorySelected = false;
    }
  }

}
