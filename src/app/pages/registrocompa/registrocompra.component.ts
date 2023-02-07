import { HistorialCompraService } from './../../services/historial-compra.service';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { HistorialCompraModel } from 'src/app/models/historialcompra.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reservas',
  templateUrl: './registrocompra.component.html',
  styleUrls: ['./registrocompra.component.css']
})
export class RegistrecompraComponent {
  historialCompra : HistorialCompraModel[] = [];
  
  constructor(private historialCompraHttpService: HistorialCompraService) {    
  }  
  ngOnInit(): void {
    //this.getProduct();
    this.getProducts();
    //this.createProduct();
    //this.updateProduct();
    //this.deleteProduct();
  }  


  getProducts() {
    return this.historialCompraHttpService.getAll().subscribe((response) => {
      this.historialCompra = response;     
    });
  }    
  deleteProduct(id: HistorialCompraModel['_id']) {
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
        this.historialCompraHttpService.destroy(id).subscribe((response) => {
          this.historialCompra = this.historialCompra.filter(historialCompr => historialCompr._id != id);
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