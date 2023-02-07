import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CreateHistorialCompraDto } from 'src/app/models/historialcompra.model';
import { HistorialCompraService } from 'src/app/services/historial-compra.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-comprafritada',
  templateUrl: './comprafritada.component.html',
  styleUrls: ['./comprafritada.component.css']
})
export class ComprafritadaComponent {
  createFritadaPedido: CreateHistorialCompraDto = { imagen: "", nombreplatillo: "", cantidad: 0, precioplatillo: 0 };
  constructor(private fritadaHttpService: HistorialCompraService, private router: Router, private elementRef: ElementRef) {
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

  createFritada() {
    const quantity = parseInt(this.quantityInput.nativeElement.value, 10);
    if (quantity <= 0) {
    alert("Debe ingresar una cantidad mayor a 0");
    return;
    }
    this.price$.subscribe(price => {
      const total = quantity * price;
      const data = {
        imagen: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tqma.com.ec%2Frecetas%2Frecipe%2F3431-fritada.html&psig=AOvVaw0G0pwbqsuidje9eNPrieGB&ust=1675867683085000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKDfz-LTg_0CFQAAAAAdAAAAABAD",
        nombreplatillo: "Fritada",
        cantidad: quantity,
        precioplatillo: total,
      }
      this.fritadaHttpService.create(data).pipe().subscribe(response => {
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
