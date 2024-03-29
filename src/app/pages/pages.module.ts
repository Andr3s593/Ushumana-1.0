import { TicketComponent } from './ticket/ticket.component';
import { StaticModule } from './../static/static.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { ReservasComponent } from './reservas/reservas.component';
import { CompraticketComponent } from './compraticket/compraticket.component';
import { ComprarestauranteComponent } from './comprarestaurante/comprarestaurante.component';
import{RegistrecompraComponent}from'./registrocompa/registrocompra.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComprayaguarlocroComponent } from './comprayaguarlocro/comprayaguarlocro.component';
import { CompraempanadasComponent } from './compraempanadas/compraempanadas.component';
import{ComprahamburgesaComponent}from './comprahamburgesa/comprahamburgesa.component';
import{ComprapolloComponent}from './comprapollo/comprapollo.component'
import { ComprafritadaComponent } from './comparfritada/comprafritada.component';
import { CompraparilladacompletaComponent } from './compraparilladacompleta/compraparilladacompleta.component';
import { TicketcompraComponent } from './ticketcompra/ticketcompra.component';
import { ReservacompraComponent } from './reservacompra/reservacompra.component';
import { HttpClientModule } from '@angular/common/http';
import { formularioComponent } from './formulario/formulario.component';

@NgModule({
  
  declarations: [
    HomeComponent,
    DashboardComponent,
    RestaurantComponent,
    TicketComponent,
    ReservasComponent,    
    CompraticketComponent,
    ComprarestauranteComponent,
    formularioComponent,
    ComprayaguarlocroComponent,
    CompraempanadasComponent,
    RegistrecompraComponent,
    ComprahamburgesaComponent,
    ComprapolloComponent,    
    ComprafritadaComponent, 
    CompraparilladacompletaComponent, 
    TicketcompraComponent, 
    ReservacompraComponent   
  ],
  exports:[
    HomeComponent,
    DashboardComponent,
    RestaurantComponent,
    TicketComponent,
    ReservasComponent,    
    formularioComponent,
    CompraticketComponent,
    ComprarestauranteComponent,
    ComprayaguarlocroComponent,
    CompraempanadasComponent,
    RegistrecompraComponent,    
    ComprahamburgesaComponent,
    ComprapolloComponent,   
    TicketcompraComponent,  
    ComprafritadaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    StaticModule,    
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class PagesModule { }