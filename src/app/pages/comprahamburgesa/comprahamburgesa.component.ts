import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-comprahamburgesa',
  templateUrl: './comprahamburgesa.component.html',
  styleUrls: ['./comprahamburgesa.component.css']
})
export class ComprahamburgesaComponent {   
  quantityControl = new FormControl(0);
  private itemPrice = 6;

  private quantitySubject = new Subject<number>();
  quantity$ = this.quantitySubject.asObservable();

  price$: Observable<number> = this.quantity$.pipe(
    map(quantity => this.itemPrice * quantity),
    startWith(this.itemPrice),
  );

  ngOnInit() {
    this.quantityControl.valueChanges.subscribe(value => {
      if (value !== null) {
        this.quantitySubject.next(value);
      }
    });
  }
}
