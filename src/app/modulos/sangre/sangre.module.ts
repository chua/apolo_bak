import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { routes } from './sangre.routing';

import { SharedAppModule } from '../../common/shared-app/shared-app.module';
import { SangreMainComponent } from './sangre-main.component';
import { OfSangreVoluntarioComponent } from './of-sangre-voluntario.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedAppModule,
    FormsModule

  ],
  declarations: [
    SangreMainComponent,
    OfSangreVoluntarioComponent,
    

    
  ],


  providers: []
})
export class SangreModule { }
