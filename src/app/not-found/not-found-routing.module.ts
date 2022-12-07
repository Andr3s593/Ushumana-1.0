import { NotFoundComponent } from './not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

const routes:Routes=[
  {path:'not-found', component:NotFoundComponent}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class NotFoundRoutingModule { }
