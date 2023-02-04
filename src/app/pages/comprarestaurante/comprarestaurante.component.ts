import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-comprarestaurante',
  templateUrl: './comprarestaurante.component.html',
  styleUrls: ['./comprarestaurante.component.css']
})
export class ComprarestauranteComponent { 
  @Output() notify: EventEmitter<number> = new EventEmitter();
  @Output() notify2: EventEmitter<number> = new EventEmitter();
  cantidades: FormControl | undefined;
  precio: FormControl | undefined;
  mutiplicar: any;
  multiplicar: any;
  total: any;
  a: number | undefined;
  b: number | undefined;
  constructor() {

  }

  ngOnInit() {
    this.cantidad();
    //  this.martes();
    this.precios();
  }
  cantidad() {
    this.cantidades = new FormControl();
    this. cantidades.valueChanges.subscribe(value => {
      this.multiplicar = parseInt(value, 10);
      this.notify2.emit(this.multiplicar);
      // this.sumar = value;
      console.log(typeof this.multiplicar);
    });
  }
 
  
  precios() {
    this.notify2.subscribe(cambios => {
      console.log(typeof cambios);

      this.a = cambios;git
      console.log(this.a);

    });
    // this.notify2.subscribe(changes => {
    //   this.b = changes;
    //   console.log(this.b);

    // });
  }
}
