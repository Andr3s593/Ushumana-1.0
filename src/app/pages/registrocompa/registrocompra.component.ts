import { HistorialCompraService } from './../../services/historial-compra.service';
import { Component } from '@angular/core';
import { HistorialCompraModel } from 'src/app/models/historialcompra.model';

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
  deleteProduct(id:HistorialCompraModel['_id']) {
    return this.historialCompraHttpService.destroy(id).subscribe((response) => {
      this.historialCompra = this.historialCompra.filter(historialCompr => historialCompr._id != id);
      //console.log(response);
    });
  }
}