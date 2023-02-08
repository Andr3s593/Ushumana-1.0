import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CreateHistorialTarjetaDto, HistorialTarjetaModel, UpdateHistorialTarjetaDto } from '../models/tarjeta.model';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {
  readonly API_URL:string = "http://localhost:4000/api/reserva-Ushumana";
  constructor(private httpClient : HttpClient) { }
  getAll():Observable<HistorialTarjetaModel[]> {
    const url = `${this.API_URL}`;
    return this.httpClient.get<HistorialTarjetaModel[]>(url);
  }
  getOne(id:HistorialTarjetaModel['_id']):Observable<HistorialTarjetaModel[]> {
    const url = `${this.API_URL}/${id}`; 
    return this.httpClient.get<HistorialTarjetaModel[]>(url);
  }
  
  create(reserva:CreateHistorialTarjetaDto):Observable<HistorialTarjetaModel[]> {
    const url = `${this.API_URL}`;
    return this.httpClient.post<HistorialTarjetaModel[]>(url, reserva)
  }
  
  update(reserva:UpdateHistorialTarjetaDto, id:HistorialTarjetaModel['_id']):Observable<HistorialTarjetaModel[]> {
    const url = `${this.API_URL}/${id}`; 
    return this.httpClient.put<HistorialTarjetaModel[]>(url, reserva);
  }
  
  destroy(id:HistorialTarjetaModel['_id']):Observable<any> {
    const url = `${this.API_URL}/${id}`; 
    return this.httpClient.delete<any>(url).pipe(map((response:{ rta:boolean;}) => {
        return response.rta;
      })
      );
    }

}
