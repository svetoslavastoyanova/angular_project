import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { FireBaseService } from "../../firebase-service.service";
import { UsersService } from "../../services/user.service";

import { Recipe } from "../../models/recipe.model";


@Component({
  selector: 'app-add-pet',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  user$ = this.usersService.currentUserProfile$;
  recipe: Recipe = new Recipe();
  submitted = false;

  createForm = new FormGroup({
    photoURL: new FormControl('', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]),
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    ingredients: new FormControl('', Validators.required),
    description: new FormControl('', [Validators.required, Validators.minLength(10)]),
    user: new FormControl('', Validators.required)
  });

  constructor(
    private recipeService: FireBaseService,
    private usersService: UsersService
  ) { }

  ngOnInit(): void { }

  get photoURL() { return this.createForm.get('photoURL'); }
  get name() { return this.createForm.get('name'); }
  get ingredients() { return this.createForm.get('ingredients'); }
  get description() { return this.createForm.get('description'); }
  get user() { return this.createForm.get('user'); }

  submit() {
    if (!this.createForm.valid) { return; }

    this.recipe = this.createForm.value; //console.log(this.pet);

    this.recipeService.create(this.recipe).then(() => {
      console.log('Added new recipe successfully!');
      this.submitted = true;
    });
  }

  newRecipe(): void {
    this.submitted = false;
    this.recipe = new Recipe();
  }
}