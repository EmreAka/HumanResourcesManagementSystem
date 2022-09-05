import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  isCategorySelected: boolean = false;
  selectedCategory: any;
  stage: number = 1;

  constructor() { }

}
