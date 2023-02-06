import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprapolloComponent } from './comprapollo.component';

describe('ComprapolloComponent', () => {
  let component:ComprapolloComponent;
  let fixture: ComponentFixture<ComprapolloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComprapolloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprapolloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
