import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { HotToastModule } from '@ngneat/hot-toast';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { LoginComponent } from './pages/log-in/log-in.component';
import { MatMenuModule } from '@angular/material/menu';
import { ProfileComponent } from './pages/profile-page/profile-page.component';
import { AddRecipeComponent } from './pages/add-recipe/add-recipe.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './pages/recipes/recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SignInComponent,
    LoginComponent,
    ProfileComponent,
    AddRecipeComponent,
    RecipesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRoutingModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    HotToastModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    CommonModule
  ],

  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
