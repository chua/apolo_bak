import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedAppModule } from '../../common/shared-app/shared-app.module';



import { CollapseModule } from 'ng2-bootstrap';

import { RouterModule } from '@angular/router';
import { routes } from './drogas.routing';



import { DrogasMainComponent } from './drogas-main.component';
import { DrogasDchosComponent } from './drogas-01-dchos.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CollapseModule.forRoot(),
    RouterModule.forChild(routes),
    SharedAppModule,


  ],
  declarations: [

    DrogasMainComponent,
    DrogasDchosComponent,
    
  //  CampoResaltadoDirective
    
  ],


  providers: []
})
export class DrogasModule { }
