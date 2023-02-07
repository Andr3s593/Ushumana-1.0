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
import { ReactiveFormsModule } from '@angular/forms';
import{ComprahamburgesaComponent}from './comprahamburgesa/comprahamburgesa.component';
import{ComprapolloComponent}from './comprapollo/comprapollo.component'
import { parilladacompletaComponent } from './parilladacompleta/parilladacompleta.component';
import { ComprafritadaComponent } from './comparfritada/comprafritada.component';

@NgModule({
  
  declarations: [
    HomeComponent,
    DashboardComponent,
    RestaurantComponent,
    TicketComponent,
    ReservasComponent,    
    CompraticketComponent,
    ComprarestauranteComponent,
    RegistrecompraComponent,
    ComprahamburgesaComponent,
    ComprapolloComponent,
    parilladacompletaComponent
    ComprafritadaComponent
  ],
  exports:[
    HomeComponent,
    DashboardComponent,
    RestaurantComponent,
    TicketComponent,
    ReservasComponent,    
    CompraticketComponent,
    ComprarestauranteComponent,
    RegistrecompraComponent,    
    ComprahamburgesaComponent,
    ComprapolloComponent,
    parilladacompletaComponent
    ComprafritadaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    StaticModule,    
    MatFormFieldModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
