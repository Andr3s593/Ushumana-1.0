import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-comprayaguarlocro',
  templateUrl: './comprayaguarlocro.component.html',
  styleUrls: ['./comprayaguarlocro.component.css']
})
export class ComprayaguarlocroComponent {   
  yaguarlocro = new FormControl(0);
  private itemPrice = 5;

  private yaguarlocroSubject = new Subject<number>();
  quantity$ = this.yaguarlocroSubject.asObservable();

  price$: Observable<number> = this.quantity$.pipe(
    map(quantity => this.itemPrice * quantity),
    startWith(this.itemPrice),
  );

  ngOnInit() {
    this.yaguarlocro.valueChanges.subscribe(value => {
      if (value !== null) {
        this.yaguarlocroSubject.next(value);
      }
    });
  }
}
