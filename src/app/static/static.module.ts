import { AuthModule } from './../auth/auth.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { PiepaginaComponent } from './piepagina/piepagina.component';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    PiepaginaComponent
  ],
  exports:[
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    PiepaginaComponent   
  ],
  imports: [
    CommonModule
  ]
})
export class StaticModule { }
