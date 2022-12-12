import { TicketComponent } from './ticket/ticket.component';
import { StaticModule } from './../static/static.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { ReservasComponent } from './reservas/reservas.component';

@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    RestaurantComponent,
    TicketComponent,
    ReservasComponent,
    TicketComponent
  ],
  exports:[
    HomeComponent,
    DashboardComponent,
    TicketComponent,
    ReservasComponent,
    TicketComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    StaticModule
  ]
})
export class PagesModule { }
