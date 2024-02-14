import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ArrayComponent } from './array/array.component';
import { MovieComponent } from './movie/movie.component';
import { RoutingComponent } from './routing/routing.component';
import { ArrayDetailsComponent } from './array-details/array-details.component';
import { FournotfourComponent } from './fournotfour/fournotfour.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormComponent,
    ReactiveFormComponent,
    HomeComponent,
    ArrayComponent,
    MovieComponent,
    RoutingComponent,
    ArrayDetailsComponent,
    FournotfourComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  //   .forRoot(
  //     [
  //   {
  //     path:'post',
  //     component:HomeComponent
  //   },
  
  // {
  //   path:'arr',
  //   component :ArrayComponent
  // },
  // {
  //   path:'array/:i',
  //   component:RoutingComponent
  // },
  // {
  //   path:'array/:id/:title',
  //   component:RoutingComponent
  // }
  // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
