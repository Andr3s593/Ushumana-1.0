import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprahamburgesaComponent } from './comprahamburgesa.component';

describe('ComprahamburgesaComponent', () => {
  let component:ComprahamburgesaComponent;
  let fixture: ComponentFixture<ComprahamburgesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprahamburgesaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprahamburgesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
