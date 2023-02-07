import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CreateHistorialCompraDto } from 'src/app/models/historialcompra.model';
import { HistorialCompraService } from 'src/app/services/historial-compra.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-parilladacompleta',
  templateUrl: './parilladacompleta.component.html',
  styleUrls: ['./parilladacompleta.component.css']
})

export class CompraparilladacompletaComponent {
  createParilladacompletaPedido: CreateHistorialCompraDto = { imagen: "", nombreplatillo: "", cantidad: 0, precioplatillo: 0 };
  constructor(private parilladacompletaHttpService: HistorialCompraService, private router: Router, private elementRef: ElementRef) {
    this.quantityInput = this.elementRef.nativeElement.querySelector('#input-largo');
  }


  quantityControl = new FormControl(0);
  private itemPrice = 6;

  private quantitySubject = new Subject<number>();
  quantity$ = this.quantitySubject.asObservable();

  price$: Observable<number> = this.quantity$.pipe(
    map(quantity => this.itemPrice * quantity),
    startWith(this.itemPrice),
  );
  ngOnInit() {
    this.quantityControl.valueChanges.subscribe(value => {
      if (value !== null) {
        this.quantitySubject.next(value);
      }
    });
  }

  @ViewChild('quantityInput', { static: true }) quantityInput: ElementRef<HTMLInputElement>;

  createParilladacompleta() {
    const quantity = parseInt(this.quantityInput.nativeElement.value, 10);
    if (quantity <= 0) {
    alert("Debe ingresar una cantidad mayor a 0");
    return;
    }
    this.price$.subscribe(price => {
      const total = quantity * price;
      const data = {
        imagen: "https://i.ytimg.com/vi/quY9vReEnhw/maxresdefault.jpg",
        nombreplatillo: "Parillada Completa",
        cantidad: quantity,
        precioplatillo: total,
      }
      this.parilladacompletaHttpService.create(data).pipe().subscribe(response => {
        console.log(response);      
        Swal.fire({
          icon: 'success',
          title: 'Usuario Registrado',
          text: 'Usuario creado exitosamente',        
        })      
        this.router.navigate(['/login']);        
      });
    });
  } 

}
