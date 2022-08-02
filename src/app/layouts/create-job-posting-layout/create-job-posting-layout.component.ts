import { Component, OnInit } from '@angular/core';
import { JobPostingService } from 'src/app/services/job-posting.service';
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-create-job-posting-layout',
  templateUrl: './create-job-posting-layout.component.html',
  styleUrls: ['./create-job-posting-layout.component.css']
})
export class CreateJobPostingLayoutComponent implements OnInit {

  constructor(public categoryService: CategoryService, private jobPostingService: JobPostingService) { }

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

    else if (this.categoryService.stage == 3){
      console.log("Yayınlanacak!")
      this.jobPostingService.addJobPosting(this.jobPostingService.jobPostingForm.value).subscribe({
        next: (value) => {console.log(`Başarılı${value}`)},
        error: (err) => {console.log('Başarısız' + ' ' + err)}
      })
    }
  }

}
