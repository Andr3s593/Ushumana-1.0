import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketcompraComponent } from './ticketcompra.component';

describe('TicketcompraComponent', () => {
  let component: TicketcompraComponent;
  let fixture: ComponentFixture<TicketcompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketcompraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketcompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
