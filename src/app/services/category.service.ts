import { Injectable } from '@angular/core';
import {collection, collectionData, Firestore} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  isCategorySelected: boolean = false;
  selectedCategory: any;
  stage: number = 1;

  constructor() { }

}
