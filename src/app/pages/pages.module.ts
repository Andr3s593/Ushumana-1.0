import { StaticModule } from './../static/static.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantComponent } from './restaurant/restaurant.component';

@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    RestaurantComponent
  ],
  exports:[
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    StaticModule
  ]
})
export class PagesModule { }
