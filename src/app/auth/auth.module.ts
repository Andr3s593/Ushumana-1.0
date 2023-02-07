import { StaticModule } from './../static/static.module';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD

@NgModule({
=======
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({  
>>>>>>> d67b783feb95734c764f90b611533987a6586d58
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  exports:[
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
<<<<<<< HEAD
    StaticModule
=======
    StaticModule,
    HttpClientModule,
    ReactiveFormsModule
>>>>>>> d67b783feb95734c764f90b611533987a6586d58
  ]
})
export class AuthModule { }
