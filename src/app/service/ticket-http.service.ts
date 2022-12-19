import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { CreateTicketUsuarioModel, TicketModel, UpdateTicketUsuarioModel } from '../models/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TickeHttpService {
  readonly API_URL: string = "https://api.escuelajs.co/api/v1/products"; //readonly solo de lectura no se puede modificar

constructor(private httpClient : HttpClient) { }

  getAll():Observable<TicketModel[]>{
    const url = `$(this.API_URL)`;
   return this.httpClient.get<[TicketModel]>(this.API_URL);
  }

  getOne(id: TicketModel['id']) {
    const url =`${this.API_URL}/${id}`;
    return this.httpClient.get(url);    
   }

  store(Ticket:CreateTicketUsuarioModel):Observable<TicketModel[]> {
   const data = {    
    precio:8,
    servicio:2,   
    detalles: ""
    };
    return this.httpClient.post<TicketModel[]>(this.API_URL,Ticket);
  }

  update(id:TicketModel ['id'], Ticket:UpdateTicketUsuarioModel ):Observable<TicketModel[]> {
    const url =`${this.API_URL}/${id}`;
    return this.httpClient.put<TicketModel[]>(url,Ticket);

  }
  destroy(id: TicketModel['id']):Observable<any> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.delete<any>(url).pipe(map((response: { rta: boolean; }) => {
        return response.rta;
      })
      );
  }

  }

