import { Component } from '@angular/core';
import { HistorialReservaModel } from 'src/app/models/historialreserva.model';
import { HistorialReservaService } from 'src/app/services/historial-reserva.service';

@Component({
  selector: 'app-reservacompra',
  templateUrl: './reservacompra.component.html',
  styleUrls: ['./reservacompra.component.css']
})
export class ReservacompraComponent {
  historialReserva : HistorialReservaModel[] = [];
  
  constructor(private historialReservaHttpService: HistorialReservaService) {    
  }  
  ngOnInit(): void {    
    this.getReserva();    
  }  
  getReserva() {
    return this.historialReservaHttpService.getAll().subscribe((response) => {
      this.historialReserva = response;     
    });
  }    
}
