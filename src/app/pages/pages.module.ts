import { TicketComponent } from './ticket/ticket.component';
import { StaticModule } from './../static/static.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservasComponent } from './reservas/reservas.component';

@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
<<<<<<< HEAD
    ReservasComponent
=======
    TicketComponent
>>>>>>> 5c863e0f8e0799ca4b9534c866794e307551215f
  ],
  exports:[
    HomeComponent,
    DashboardComponent,
    TicketComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    StaticModule
  ]
})
export class PagesModule { }
