import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarestauranteComponent } from './comprarestaurante.component';

describe('ComprarestauranteComponent', () => {
  let component: ComprarestauranteComponent;
  let fixture: ComponentFixture<ComprarestauranteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprarestauranteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprarestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
