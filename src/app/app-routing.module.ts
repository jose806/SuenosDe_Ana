import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../app/home/home.component';
import {AboutUsComponent} from '../app/about-us/about-us.component'

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'aboutUs', component:AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[HomeComponent, AboutUsComponent]
