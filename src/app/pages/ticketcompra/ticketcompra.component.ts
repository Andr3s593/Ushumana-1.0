import { Component } from '@angular/core';
import { HistorialTicketModel } from 'src/app/models/historialticket.model';
import { HistorialTicketService } from 'src/app/services/historial-ticket.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ticketcompra',
  templateUrl: './ticketcompra.component.html',
  styleUrls: ['./ticketcompra.component.css']
})
export class TicketcompraComponent {
  historialTicket : HistorialTicketModel[] = [];
  
  constructor(private historialTicketHttpService: HistorialTicketService) {    
  }  
  ngOnInit(): void {    
    this.getTicket();    
  }  
  getTicket() {
    return this.historialTicketHttpService.getAll().subscribe((response) => {
      this.historialTicket = response;     
    });
  }    
  deleteTicket(id: HistorialTicketModel['_id']) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Quieres cancelar este pedido?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, cancelar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.historialTicketHttpService.destroy(id).subscribe((response) => {
          this.historialTicket = this.historialTicket.filter(historialCompr => historialCompr._id != id);
          Swal.fire(
            'Cancelado!',
            'El pedido ha sido cancelado con éxito.',
            'success'
          );
        });
      }
    });
  } 
}
