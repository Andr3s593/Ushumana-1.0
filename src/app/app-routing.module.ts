import { NotFoundComponent } from './not-found/not-found.component';
import { NotFoundRoutingModule } from './not-found/not-found-routing.module';
import { StaticRoutingModule } from './static/static-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUshumanaComponent } from './login-ushumana/login-ushumana.component';

const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'**', component:NotFoundComponent},
  {path:'loginushumana', component:LoginUshumanaComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule,
    StaticRoutingModule,    
    NotFoundRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
