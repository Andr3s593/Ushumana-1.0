import { ComponentFixture, TestBed } from '@angular/core/testing';

import { formularioComponent } from './formulario.component';
describe('ReservasComponent', () => {
  let component: formularioComponent;
  let fixture: ComponentFixture<formularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ formularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(formularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
