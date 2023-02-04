import { CompraticketComponent } from './compraticket/compraticket.component';
import { ComprarestauranteComponent } from './comprarestaurante/comprarestaurante.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { ReservasComponent } from './reservas/reservas.component';
import { TicketComponent } from './ticket/ticket.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{RegistrecompraComponent}from'./registrocompa/registrocompra.component';

const routes:Routes = [
  {path:'home', 
  component:HomeComponent,
  children:[
    {path:'dashboard', component:DashboardComponent},
    {path:'restaurante', component:RestaurantComponent},
    {path:'reservas', component:ReservasComponent},
    {path:'tickets', component:TicketComponent},
    {path:'compraRestaurante', component:ComprarestauranteComponent},
    {path:'compraTicket', component:CompraticketComponent},
    {path:'registrocompra',component:RegistrecompraComponent}
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
