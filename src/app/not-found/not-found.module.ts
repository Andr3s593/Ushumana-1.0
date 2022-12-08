import { StaticModule } from './../static/static.module';
import { NotFoundComponent } from './not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  exports:[
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    StaticModule
  ]
})
export class NotFoundModule { }
