import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input() title: string | undefined
  @Input() freelancer: string | undefined
  @Input() active: string | undefined
  @Input() categoryImageUrl: string | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
