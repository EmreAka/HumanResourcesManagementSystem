import { Component, OnInit } from '@angular/core';
import { JobPostingService } from 'src/app/services/job-posting.service';
import {CategoryService} from "../../services/category.service";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-create-job-posting-layout',
  templateUrl: './create-job-posting-layout.component.html',
  styleUrls: ['./create-job-posting-layout.component.css']
})
export class CreateJobPostingLayoutComponent implements OnInit {

  constructor(public categoryService: CategoryService,
    private jobPostingService: JobPostingService,
    private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  getStyle(){
    if (this.categoryService.isCategorySelected){
      return "background-color: #F1D00A"
    }
    if (this.categoryService.stage == 3) {
      return "background-color: #F1D00A"
    }
    return "disabled"
  }

  nextStage(){
    if (this.categoryService.isCategorySelected && !(this.categoryService.stage == 3)){
      this.categoryService.stage += 1;
      this.categoryService.isCategorySelected = false;
    }

    else if (this.categoryService.stage == 3) {
      this.spinner.show();
      this.jobPostingService.addJobPosting().subscribe({
        next: (value) => {
          this.router.navigateByUrl("/");
          this.spinner.hide();
        },
        error: (err) => {
          console.log(err);
          this.spinner.hide();
        }
      });
    }
  }

}
