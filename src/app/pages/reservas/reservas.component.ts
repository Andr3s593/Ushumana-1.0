import { Component, OnInit } from '@angular/core';
import { ReservatHttpService} from 'src/app/services/reserva-http.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {
  constructor (private reservasHttpservices:ReservatHttpService) { 
  }
  ngOnInit(): void {
    //this.getReservas();
    //this.getReserva();
    //this.createReserva();
    //this.updateReserva();
    //this.deleteReserva();
  }
  getReservas(){
    this.reservasHttpservices.getAll().subscribe(
      response => {
        console.log(response);
    }
  );
}
getReserva(){
  return this.reservasHttpservices.getOne(2).subscribe(
    response => {
      console.log(response);
  }
);
}
createReserva(){
  const data = {
    detalles:'Vacaciones',
    numero_adultos:2,
    numero_niños:1,
    mascotas:'si',
    servicioId:2,
  }
return this.reservasHttpservices.reserva(data).subscribe(
  response =>{
    console.log(response);
  }
);
}
updateProduct(){
const data = {
  detalles:'Vacaciones',
    numero_adultos:2,
    numero_niños:1,
    mascotas:'si',
    servicioId:2,
}
this.reservasHttpservices.update(1, data).subscribe(
response =>{
  console.log(response);
}
);
}

deleteProduct(){
return this.reservasHttpservices.destroy(5).subscribe(
  response =>{
    console.log(response);
  }
);
}
}

