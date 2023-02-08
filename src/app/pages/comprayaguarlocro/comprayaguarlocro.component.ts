
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CreateHistorialCompraDto } from 'src/app/models/historialcompra.model';
import { HistorialCompraService } from 'src/app/services/historial-compra.service';
import Swal  from 'sweetalert2';

@Component({
  selector: 'app-comprayaguarlocro',
  templateUrl: './comprayaguarlocro.component.html',
  styleUrls: ['./comprayaguarlocro.component.css']
})
export class ComprayaguarlocroComponent {
  createyaguarlocroPedido: CreateHistorialCompraDto = { imagen: "", nombreplatillo: "", cantidad: 0, precioplatillo: 0 };
  constructor(private yaguarlocroHttpService: HistorialCompraService, private router: Router, private elementRef: ElementRef) {
    this.quantityInput = this.elementRef.nativeElement.querySelector('#input-largo');
  }


  quantityControl = new FormControl(0);
  private itemPrice = 5;

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

  createYaguarlocro() {
    const quantity = parseInt(this.quantityInput.nativeElement.value, 10);
    if (quantity <= 0) {
    alert("Debe ingresar una cantidad mayor a 0");
    return;
    }
    this.price$.subscribe(price => {
      const total = quantity * price;
      const data = {
        imagen: "https://th.bing.com/th/id/R.7b5ec3ed8dc20fbe008559f558d58e8d?rik=V8jcYQno4wNYSA&riu=http%3a%2f%2f2.bp.blogspot.com%2f-diOm0AIe1pY%2fVYtrcIqOnKI%2fAAAAAAAAAB4%2fyRG5hYyeER0%2fs1600%2fyaguarlocro.jpg&ehk=vL%2fIKfJ11DsV1DqQpQjXbGYYginzA21ugx%2fOIRpci%2bE%3d&risl=&pid=ImgRaw&r=0",
        nombreplatillo: "Yaguarlocro",
        cantidad: quantity,
        precioplatillo: total,
      }
      this.yaguarlocroHttpService.create(data).pipe().subscribe(response => {
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
