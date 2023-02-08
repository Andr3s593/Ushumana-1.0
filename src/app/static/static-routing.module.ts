import { RouterModule,Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PiepaginaComponent } from './piepagina/piepagina.component';

const routes:Routes=[
  {path:'footer', component:FooterComponent},
  {path:'navbar', component:NavbarComponent},
  {path:'login-header', component:HeaderComponent},
  {path:'login-footer', component:PiepaginaComponent},
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class StaticRoutingModule { }
