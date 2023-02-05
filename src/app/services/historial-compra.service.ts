import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateHistorialCompraDto, HistorialCompraModel, UpdateHistorialCompraDto } from '../models/historialcompra.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistorialCompraService {
  readonly API_URL:string = "http://localhost:4000/api/pedidos-Ushumana";
  constructor(private httpClient : HttpClient) { }
  getAll():Observable<HistorialCompraModel[]> {
    const url = `${this.API_URL}`;
    return this.httpClient.get<HistorialCompraModel[]>(url);
  }
  getOne(id:HistorialCompraModel['_id']):Observable<HistorialCompraModel[]> {
    const url = `${this.API_URL}/${id}`; 
    return this.httpClient.get<HistorialCompraModel[]>(url);
  }
  
  create(reserva:CreateHistorialCompraDto):Observable<HistorialCompraModel[]> {
    const url = `${this.API_URL}`;
    return this.httpClient.post<HistorialCompraModel[]>(url, reserva)
  }
  
  update(reserva:UpdateHistorialCompraDto, id:HistorialCompraModel['_id']):Observable<HistorialCompraModel[]> {
    const url = `${this.API_URL}/${id}`; 
    return this.httpClient.put<HistorialCompraModel[]>(url, reserva);
  }
  
  destroy(id:HistorialCompraModel['_id']):Observable<any> {
    const url = `${this.API_URL}/${id}`; 
    return this.httpClient.delete<any>(url).pipe(map((response:{ rta:boolean;}) => {
        return response.rta;
      })
      );
    }
}
