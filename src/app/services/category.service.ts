import { Injectable } from '@angular/core';
import {collection, collectionData, Firestore} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  isCategorySelected: boolean = false;
  selectedCategory: any;
  stage: number = 1;

  constructor(private firestore: Firestore) { }

  getCategories(){
    const categoriesDocRef = collection(this.firestore, `categories`);
    return collectionData(categoriesDocRef, {idField: "id"});
  }

  getSoftwareDevelopmentCategories(){
    const softCategories = collection(this.firestore, 'software-development-categories');
    return collectionData(softCategories, {idField: 'id'})
  }
}
