import { Injectable } from '@angular/core';
import { CreateHistorialTicketDto, HistorialTicketModel, UpdateHistorialTicketDto } from '../models/historialticket.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistorialTicketService {
  readonly API_URL:string = "http://localhost:4000/api/ticket-Ushumana";
  constructor(private httpClient : HttpClient) { }
  getAll():Observable<HistorialTicketModel[]> {
    const url = `${this.API_URL}`;
    return this.httpClient.get<HistorialTicketModel[]>(url);
  }
  getOne(id:HistorialTicketModel['_id']):Observable<HistorialTicketModel[]> {
    const url = `${this.API_URL}/${id}`; 
    return this.httpClient.get<HistorialTicketModel[]>(url);
  }  
  create(reserva:CreateHistorialTicketDto):Observable<HistorialTicketModel[]> {
    const url = `${this.API_URL}`;
    return this.httpClient.post<HistorialTicketModel[]>(url, reserva)
  }
  
  update(reserva:UpdateHistorialTicketDto, id:HistorialTicketModel['_id']):Observable<HistorialTicketModel[]> {
    const url = `${this.API_URL}/${id}`; 
    return this.httpClient.put<HistorialTicketModel[]>(url, reserva);
  }
  
  destroy(id:HistorialTicketModel['_id']):Observable<any> {
    const url = `${this.API_URL}/${id}`; 
    return this.httpClient.delete<any>(url).pipe(map((response:{ rta:boolean;}) => {
        return response.rta;
      })
      );
    }
}
