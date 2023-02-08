import { TarjetaService } from 'src/app/services/tarjeta.service';
import { Component, OnInit } from '@angular/core';
import { CreateHistorialTarjetaDto } from 'src/app/models/tarjeta.model';

@Component({
  selector: 'app-comprarestaurante',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class formularioComponent implements OnInit {
  createTarjeta : CreateHistorialTarjetaDto = {nombres:"",apellidos:"",email:"",tarjeta:"",numerotarjeta:0,fechacaducidad: new Date()};
  ngOnInit(): void {
  } 
  constructor(private Tarjetahttp : TarjetaService){}
  createTarjeta1() {
    const data ={      
      nombres: this.createTarjeta.nombres,
      apellidos: this.createTarjeta.apellidos,
      email: this.createTarjeta.email,
      tarjeta: this.createTarjeta.tarjeta,
      numerotarjeta: this.createTarjeta.numerotarjeta,
      fechacaducidad: this.createTarjeta.fechacaducidad,      
    }
    return this.Tarjetahttp.create(data).subscribe((response) => {
      console.log(response);
    });
  }

}
