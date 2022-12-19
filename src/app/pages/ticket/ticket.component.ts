import { TickeHttpService } from './../../services/ticket-http.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {
  constructor(private ticketHttpService: TickeHttpService) {
  }
  getRestaurants() {
    this.ticketHttpService.getAll().subscribe(response => {
      console.log(response);
    });
  }
  getRestaurant() {
    this.ticketHttpService.getOne(2).subscribe(response => {
      console.log(response);
    });
  }
  createRestaurants() {
    const data = {
      precio: 15,
      servicio: "Servicio",
      detalles: "Descripcion"      
    }
    this.ticketHttpService.store(data).subscribe(response => {
      console.log(response);
    });
  }
  updateRestaurant() {
    const data = {
      precio: 15,
      servicio: "Servicio",
      detalles: "Descripcion" 
    }
    this.ticketHttpService.update(data, 5).subscribe(response => {
      console.log(response);
    }
    );
  }
  deleteRestaurant() {
    this.ticketHttpService.destroy(5).subscribe(response => {
      console.log(response)
    }
    )
  }
}
