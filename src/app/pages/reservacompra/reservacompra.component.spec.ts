import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservacompraComponent } from './reservacompra.component';

describe('ReservacompraComponent', () => {
  let component: ReservacompraComponent;
  let fixture: ComponentFixture<ReservacompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservacompraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservacompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
