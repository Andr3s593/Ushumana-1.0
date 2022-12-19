import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class RestaurantModule {
  id: number | undefined;
  nombres: string | undefined;
  cedula: string | undefined;
  cantidad_de_platos: string | undefined;
  numero_de_mesa: string | undefined;
  precio: string | undefined;
 }
 export interface CreateRestaurantDto extends Omit <RestaurantModule, 'id'| 'plato'> {
  
  }
  
  export interface UpdateRestaurantDto extends Partial<RestaurantModule> {

  }
