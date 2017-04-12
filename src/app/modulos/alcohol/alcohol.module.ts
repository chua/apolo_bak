import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedAppModule } from '../../common/shared-app/shared-app.module';


import { CollapseModule } from 'ng2-bootstrap';



import { RouterModule } from '@angular/router';
import { routes } from './alcohol.routing';

//import { CampoResaltadoDirective } from '../../campo-resaltado.directive';

import { AlcoholComponent } from './alcohol.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CollapseModule.forRoot(),
    RouterModule.forChild(routes),
    SharedAppModule
    
  ],
  declarations: [
   // CampoResaltadoDirective,
    AlcoholComponent,
    
  ],

  providers: []
})
export class AlcoholModule { }
