import { NotFoundComponent } from './not-found/not-found.component';
import { NotFoundRoutingModule } from './not-found/not-found-routing.module';
import { StaticRoutingModule } from './static/static-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'home/dashboard', pathMatch:'full'},
  {path:'**', component:NotFoundComponent}
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
