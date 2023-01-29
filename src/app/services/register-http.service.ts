import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateUsuarioDto, UpdateUsuarioDto, UsuarioModel } from '../models/usuario.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterHttpService {
  readonly API_URL:string = "http://localhost:4000/api/usuario-Ushumana/";
  constructor(private httpClient : HttpClient) { }
  getAll():Observable<UsuarioModel[]> {
    const url = `${this.API_URL}`;
    return this.httpClient.get<UsuarioModel[]>(url);
  }
  getOne(id:UsuarioModel['id']):Observable<UsuarioModel[]> {
    const url = `${this.API_URL}/${id}`; 
    return this.httpClient.get<UsuarioModel[]>(url);
  }
  
  create(reserva:CreateUsuarioDto):Observable<UsuarioModel[]> {
    const url = `${this.API_URL}`;
    return this.httpClient.post<UsuarioModel[]>(url, reserva)
  }
  
  update(reserva:UpdateUsuarioDto, id:UsuarioModel['id']):Observable<UsuarioModel[]> {
    const url = `${this.API_URL}/${id}`; 
    return this.httpClient.put<UsuarioModel[]>(url, reserva);
  }
  
  destroy(id:UsuarioModel['id']):Observable<any> {
    const url = `${this.API_URL}/${id}`; 
    return this.httpClient.delete<any>(url).pipe(map((response:{ rta:boolean;}) => {
        return response.rta;
      })
      );
    }
}
