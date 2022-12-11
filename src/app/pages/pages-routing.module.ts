<<<<<<< HEAD
import { ReservasComponent } from './reservas/reservas.component';
=======
import { TicketComponent } from './ticket/ticket.component';
>>>>>>> 5c863e0f8e0799ca4b9534c866794e307551215f
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
<<<<<<< HEAD
    {path:'reservas', component:ReservasComponent}
=======
    {path:'tickets', component:TicketComponent},
>>>>>>> 5c863e0f8e0799ca4b9534c866794e307551215f
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
