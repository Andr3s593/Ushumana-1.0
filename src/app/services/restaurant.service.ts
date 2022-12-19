import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateRestaurantDto, RestaurantModule, UpdateRestaurantDto } from '../models/restaurant.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  readonly API_URL: string = "https://exampleApi/restaurant"; //readonly solo de lectura no se puede modificar
  constructor(private httpClient: HttpClient) { }
   getAll(): Observable<RestaurantModule[]> {
    const url = `${this.API_URL}`;
    return this.httpClient.get<[RestaurantModule]>(url);
  }

  getOne(id: RestaurantModule['id']) {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.get(url);
  }

  store(Restaurant: CreateRestaurantDto): Observable<RestaurantModule> {
    const url = `${this.API_URL}`;
    return this.httpClient.post<RestaurantModule>(url, Restaurant);
  }

  update(updateRestaurant: UpdateRestaurantDto, id: RestaurantModule['id']): Observable<RestaurantModule> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.put<RestaurantModule>(url, updateRestaurant);

  }
  destroy(id: RestaurantModule['id']): Observable<any> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.delete<any>(url).pipe(map((response: { rta: boolean; }) => {
      return response.rta;
    })
    );
  }
}
