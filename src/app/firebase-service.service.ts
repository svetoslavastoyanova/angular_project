import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from "@angular/fire/compat/database";

import { Recipe } from "./models/recipe.model"


@Injectable({
  providedIn: 'root'
})
export class FireBaseService {

  private dbPath = '/recipes';

  recipeRef: AngularFireList<Recipe>;

  constructor(private db: AngularFireDatabase) {
    this.recipeRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Recipe> {
    return this.recipeRef;
  }

  create(pet: Recipe): any {
    return this.recipeRef.push(pet);
  }

  update(key: string, value: any): Promise<void> {
    return this.recipeRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.recipeRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.recipeRef.remove();
  }
}