import { ComponentFixture, TestBed } from '@angular/core/testing';

import{RegistrecompraComponent}from'./registrocompra.component';

describe('RegistrecompraComponent', () => {
  let component: RegistrecompraComponent;
  let fixture: ComponentFixture<RegistrecompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrecompraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrecompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});