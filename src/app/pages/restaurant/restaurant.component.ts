import { Component } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent {
  /*/
  constructor(private restaurantHttpService: RestaurantService) {
  }
  getRestaurants() {
    this.restaurantHttpService.getAll().subscribe(response => {
      console.log(response);
    });
  }
  getRestaurant() {
    this.restaurantHttpService.getOne(2).subscribe(response => {
      console.log(response);
    });
  }
  createRestaurants() {
    const data = {
      nombres: "Juanito",
      cantidad_de_platos: 4,
      numero_de_mesa: 4,
      precio: 15,
    }
    this.restaurantHttpService.store(data).subscribe(response => {
      console.log(response);
    });
  }
  updateRestaurant() {
    const data = {
      nombres: "Juanito",
      cantidad_de_platos: 4,
      numero_de_mesa: 4,
      precio: 15
    }
    this.restaurantHttpService.update(data, 5).subscribe(response => {
      console.log(response);
    }
    );
  }
  deleteRestaurant() {
    this.restaurantHttpService.destroy(5).subscribe(response => {
      console.log(response)
    }
    )
  }/*/
}