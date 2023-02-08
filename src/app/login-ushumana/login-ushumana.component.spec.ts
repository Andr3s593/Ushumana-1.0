import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUshumanaComponent } from './login-ushumana.component';

describe('LoginUshumanaComponent', () => {
  let component: LoginUshumanaComponent;
  let fixture: ComponentFixture<LoginUshumanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginUshumanaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginUshumanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
