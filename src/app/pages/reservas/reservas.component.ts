import { ReservatHttpService } from 'src/app/services/reserva-http.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent {
  /*/
  constructor(private reservatHttpService: ReservatHttpService) {
  }
  getReservas() {
    this.reservatHttpService.getAll().subscribe(response => {
      console.log(response);
    });
  }
  getReserva() {
    this.reservatHttpService.getOne(2).subscribe(response => {
      console.log(response);
    });
  }
  createReservas() {
    const data = {            
      detalles:"string",
      numero_adultos:5,
      numero_niños:5,
      mascotas:1,
      servicioId:1
    }
    this.reservatHttpService.newReserva(data).subscribe(response => {
      console.log(response);
    });
  }
  updateReserva() {
    const data = {
      detalles:"string",
      numero_adultos:5,
      numero_niños:5,
      mascotas:1
    }
    this.reservatHttpService.updateReserva(data, 5).subscribe(response => {
      console.log(response);
    }
    );
  }
  deleteReserva() {
    this.reservatHttpService.destroy(5).subscribe(response => {
      console.log(response)
    }
    )
  }
  /*/
}