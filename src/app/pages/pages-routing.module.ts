import { ComprayaguarlocroComponent } from './comprayaguarlocro/comprayaguarlocro.component';
import { CompraempanadasComponent } from './compraempanadas/compraempanadas.component';
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
import { formularioComponent } from './formulario/formulario.component';
import{ComprahamburgesaComponent}from './comprahamburgesa/comprahamburgesa.component';
import{ComprapolloComponent}from './comprapollo/comprapollo.component';
import{ComprafritadaComponent}from './comparfritada/comprafritada.component';
import { CompraparilladacompletaComponent } from './compraparilladacompleta/compraparilladacompleta.component';
import { ReservacompraComponent } from './reservacompra/reservacompra.component';
import { TicketcompraComponent } from './ticketcompra/ticketcompra.component';
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
    {path:'registrocompra',component:RegistrecompraComponent},
    {path:'formulario', component:formularioComponent},
    {path:'comprahamburgesa',component :ComprahamburgesaComponent},
    {path:'comprapollo',component :ComprapolloComponent},    
    {path:'comprafritada',component :ComprafritadaComponent},
    {path:'comprayahuarlocro',component :ComprayaguarlocroComponent},
    {path:'compraempanadas',component :CompraempanadasComponent},
    {path:'compraparillada',component :CompraparilladacompletaComponent},
    {path:'registroticket',component :TicketcompraComponent},
    {path:'registroreserva',component :ReservacompraComponent}            
    
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
