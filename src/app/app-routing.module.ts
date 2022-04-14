import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { LoginComponent } from "./pages/log-in/log-in.component";
import { SignInComponent } from "./pages/sign-in/sign-in.component";
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { ProfileComponent } from "./pages/profile-page/profile-page.component";
import { AddRecipeComponent } from "./pages/add-recipe/add-recipe.component";
import { RecipesComponent } from "./pages/recipes/recipes.component";

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'home',
    component: HomePageComponent,
    
  },
  {
    path: 'register',
    component: SignInComponent,
    ...canActivate(redirectLoggedInToHome)

  },
  {
    path: 'login',
    component: LoginComponent,
    ...canActivate(redirectLoggedInToHome)

  },
  {
    path: 'profile',
    component: ProfileComponent,
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'add-recipe',
    component: AddRecipeComponent,
    ...canActivate(redirectUnauthorizedToLogin),
    
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    
  },
  
];

export const AppRoutingModule = RouterModule.forRoot(routes)


