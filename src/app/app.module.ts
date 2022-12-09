import { NotFoundModule } from './not-found/not-found.module';
import { StaticModule } from './static/static.module';
import { AuthModule } from './auth/auth.module';
import { PagesModule } from './pages/pages.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { TicketComponent } from './pages/ticket/ticket.component';

@NgModule({
  declarations: [
    AppComponent       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule,
    StaticModule,   
    NotFoundModule         
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
