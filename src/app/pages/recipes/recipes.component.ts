import { Component, OnInit } from '@angular/core';

import { map } from "rxjs";
import { Recipe } from "../../models/recipe.model";

import { AuthService } from '../../services/auth.service';
import { FireBaseService } from "../../firebase-service.service";
import { UsersService } from "../../services/user.service";



@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  user$ = this.usersService.currentUserProfile$;
  recipes?: Recipe[];

  constructor(
    private authService: AuthService,
    private firaBseService: FireBaseService,
    private usersService: UsersService,
  
  ) { }

  ngOnInit(): void {
    this.showRecipes();
  }

  showRecipes(): void {
    this.firaBseService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.recipes = data;
    });
  }

}