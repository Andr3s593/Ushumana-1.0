import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraparilladacompletaComponent } from './compraparilladacompleta.component';

describe('CompraparilladacompletaComponent', () => {
  let component:CompraparilladacompletaComponent;
  let fixture: ComponentFixture<CompraparilladacompletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompraparilladacompletaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompraparilladacompletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
