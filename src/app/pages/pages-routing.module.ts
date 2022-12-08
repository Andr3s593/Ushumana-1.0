import { RestaurantComponent } from './restaurant/restaurant.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes:Routes = [
  {path:'home', 
  component:HomeComponent,
  children:[
    {path:'dashboard', component:DashboardComponent},
    {path:'restaurant', component:RestaurantComponent}
  ]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class PagesRoutingModule { }
