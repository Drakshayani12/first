import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrayComponent } from './array/array.component';
import { FournotfourComponent } from './fournotfour/fournotfour.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { RoutingComponent } from './routing/routing.component';

const routes: Routes = [
  {
    path:'post',
    component:HomeComponent
  },
  {
    path:'posts',
    component:MovieComponent
  },
{
  path:'arr',
  component :ArrayComponent
},
{
  path:'array/:i',
  component:RoutingComponent
},
{
  path:'array/:id/:title',
  component:RoutingComponent
},
{
  path:'**',
  component:FournotfourComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
