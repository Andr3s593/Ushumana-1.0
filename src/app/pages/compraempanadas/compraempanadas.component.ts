import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-compraempanadas',
  templateUrl: './compraempanadas.component.html',
  styleUrls: ['./compraempanadas.component.css']
})
export class CompraempanadasComponent {   
  empanadas = new FormControl(0);
  private itemPrice = 10;

  private empanadasSubject = new Subject<number>();
  quantity$ = this.empanadasSubject.asObservable();

  price$: Observable<number> = this.quantity$.pipe(
    map(quantity => this.itemPrice * quantity),
    startWith(this.itemPrice),
  );

  ngOnInit() {
    this.empanadas.valueChanges.subscribe(value => {
      if (value !== null) {
        this.empanadasSubject.next(value);
      }
    });
  }
}
