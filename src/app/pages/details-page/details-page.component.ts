import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { dbPath } from 'src/environments/environment';
import { Recipe } from "../../models/recipe.model";

import { UsersService } from "../../services/user.service";
import { FireBaseService } from 'src/app/firebase-service.service';


@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  user$ = this.usersService.currentUserProfile$;
  recipes?: Recipe[];

  @Input() recipe?: Recipe;

  currentRecipe: Recipe = {
    photoURL: 'string',
    ingredients: [],
    description: 'string'
  };
  message = '';
  editActive = false;

  createForm = new FormGroup({
    photoURL: new FormControl(''),
    ingredients: new FormControl(''),
    description: new FormControl('')
  });

  constructor(
    private fireBaseService: FireBaseService,
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) { }

  get photoURL() { return this.createForm.get('photoURL'); }
  get ingredients() { return this.createForm.get('ingredients'); }
  get description() { return this.createForm.get('description'); }

  ngOnInit(): void {
    this.message = '';
    this.retrieveRecipe(this.activatedRoute.snapshot.params['key']);
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentRecipe = { ...this.recipe };
  }

  retrieveRecipe(key: string): void {
    this.http.get(dbPath + `/${key}.json`).subscribe(res => {this.recipe = res;})}

  showEditForm(): void {
    this.editActive = true;
  }

  hideEditForm(): void {
    this.editActive = false;
  }

  updateRecipe(): void {
    if (!this.createForm.valid) { return; }

    this.currentRecipe = this.createForm.value;

    if (this.activatedRoute.snapshot.params['key']) {
      this.fireBaseService.update(this.activatedRoute.snapshot.params['key'], this.currentRecipe)
        .then(() => {
          this.message = 'Recipe was updated successfully!'
          this.router.navigate(['/home']);
        })
        .catch(err => console.log(err));
    }
  }

  deleteRecipe(): void {
    if(confirm(`Are you sure you want to permanently remove this recipe?`)) {
      if (this.activatedRoute.snapshot.params['key']) {
        this.fireBaseService.delete(this.activatedRoute.snapshot.params['key'])
          .then(() => {
            this.router.navigate([`/home`]);
          })
          .catch(err => console.log(err));
      }
    }
  }
}