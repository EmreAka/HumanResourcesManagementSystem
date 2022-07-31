import { Injectable } from '@angular/core';
import {collection, collectionData, Firestore} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  isCategorySelected: boolean = false;
  selectedCategory: any;

  constructor(private firestore: Firestore) { }

  getCategories(){
    const categoriesDocRef = collection(this.firestore, `categories`);
    return collectionData(categoriesDocRef, {idField: "id"});
  }
}
