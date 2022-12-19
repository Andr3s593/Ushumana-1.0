import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { map, Observable } from "rxjs";
import { CreateReservaDto, ReservasModel, UpdateReservaDto } from '../modules/reservas.model';

@Injectable({
  providedIn: 'root'
})
export class ReservatHttpService {

  readonly API_URL:string = "//";

  constructor (private httpClient:HttpClient) { }

getAll():Observable<ReservasModel[]> {
  const url = `${this.API_URL}`;
  return this.httpClient.get<ReservasModel[]>(url);
}
getOne(id:ReservasModel['id_reserva']):Observable<ReservasModel[]> {
  const url = `${this.API_URL}/${id}`; 
  return this.httpClient.get<ReservasModel[]>(url);
}

reserva(reserva:CreateReservaDto):Observable<ReservasModel[]> {
  const url = `${this.API_URL}`;
  return this.httpClient.post<ReservasModel[]>(url, reserva)
}

update(id:ReservasModel['id_reserva'], reserva:UpdateReservaDto):Observable<ReservasModel[]> {
  const url = `${this.API_URL}/${id}`; 
  return this.httpClient.put<ReservasModel[]>(url, reserva);
}

destroy(id:ReservasModel['id_reserva']):Observable<any> {
  const url = `${this.API_URL}/${id}`; 
  return this.httpClient.delete<any>(url).pipe(map((response:{ rta:boolean;}) => {
      return response.rta;
    })
    );
  }
}



