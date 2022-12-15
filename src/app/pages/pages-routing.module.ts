import { RestaurantComponent } from './restaurant/restaurant.component';
import { ReservasComponent } from './reservas/reservas.component';
import { TicketComponent } from './ticket/ticket.component';
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
    {path:'restaurante', component:RestaurantComponent},
    {path:'reservas', component:ReservasComponent},
    {path:'tickets', component:TicketComponent}
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
