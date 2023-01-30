import { HttpClientModule } from '@angular/common/http';
import { StaticModule } from './../static/static.module';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  exports:[
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    StaticModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
