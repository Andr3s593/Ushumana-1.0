export interface RestaurantModule {
  id: number;
  nombres: string;
  cantidad_de_platos: number;
  numero_de_mesa: number;
  precio: number;
}
export interface CreateRestaurantDto extends Omit<RestaurantModule, 'id'> {

}
export interface UpdateRestaurantDto extends Partial<RestaurantModule> {
  
}
