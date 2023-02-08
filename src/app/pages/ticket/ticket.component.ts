import { Component, ElementRef, ViewChild} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {
  /*
  constructor(private elementRef: ElementRef) {
    this.quantityInput1 = this.elementRef.nativeElement.querySelector('#input-largo');
    this.quantityInput2 = this.elementRef.nativeElement.querySelector('#input-largo');
    this.quantityInput3 = this.elementRef.nativeElement.querySelector('#input-largo');
    this.quantityInput4 = this.elementRef.nativeElement.querySelector('#input-largo');
  }
  quantityControl = new FormControl(0);
  private adultosPrice = 8;
  private ninosPrice = 4;
  private terceraedadPrice = 4;
  private discapacitadosPrice = 4;
  private preciocero = 0;

  private quantitySubject = new Subject<number>();
  quantity$ = this.quantitySubject.asObservable();

  price$: Observable<number> = this.quantity$.pipe(
    map(quantity => this.adultosPrice * quantity),    
    startWith(this.preciocero),
  );
  ngOnInit() {
    this.quantityControl.valueChanges.subscribe(value => {
      if (value !== null) {
        this.quantitySubject.next(value);
      }
    });
  }
  @ViewChild('quantityInput1', { static: true }) quantityInput1: ElementRef<HTMLInputElement>;
  @ViewChild('quantityInput2', { static: true }) quantityInput2: ElementRef<HTMLInputElement>;
  @ViewChild('quantityInput3', { static: true }) quantityInput3: ElementRef<HTMLInputElement>;
  @ViewChild('quantityInput4', { static: true }) quantityInput4: ElementRef<HTMLInputElement>;*/
}
