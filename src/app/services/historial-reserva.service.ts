import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateHistorialReservaDto, HistorialReservaModel, UpdateHistorialReservaDto } from '../models/historialreserva.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistorialReservaService {
  readonly API_URL:string = "http://localhost:4000/api/reserva-Ushumana";
  constructor(private httpClient : HttpClient) { }
  getAll():Observable<HistorialReservaModel[]> {
    const url = `${this.API_URL}`;
    return this.httpClient.get<HistorialReservaModel[]>(url);
  }
  getOne(id:HistorialReservaModel['_id']):Observable<HistorialReservaModel[]> {
    const url = `${this.API_URL}/${id}`; 
    return this.httpClient.get<HistorialReservaModel[]>(url);
  }
  
  create(reserva:CreateHistorialReservaDto):Observable<HistorialReservaModel[]> {
    const url = `${this.API_URL}`;
    return this.httpClient.post<HistorialReservaModel[]>(url, reserva)
  }
  
  update(reserva:UpdateHistorialReservaDto, id:HistorialReservaModel['_id']):Observable<HistorialReservaModel[]> {
    const url = `${this.API_URL}/${id}`; 
    return this.httpClient.put<HistorialReservaModel[]>(url, reserva);
  }
  
  destroy(id:HistorialReservaModel['_id']):Observable<any> {
    const url = `${this.API_URL}/${id}`; 
    return this.httpClient.delete<any>(url).pipe(map((response:{ rta:boolean;}) => {
        return response.rta;
      })
      );
    }

}
