import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../app/home/home.component';
import {AboutUsComponent} from '../app/about-us/about-us.component'
import {ContactPageComponent} from '../app/contact-page/contact-page.component'

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'aboutUs', component:AboutUsComponent},
  {path:'contactUs', component:ContactPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[HomeComponent, AboutUsComponent,ContactPageComponent]
