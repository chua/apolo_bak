import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedAppModule } from '../../common/shared-app/shared-app.module';

import { RouterModule } from '@angular/router';
import { routes } from './alcohol.routing';

import { AlcoholComponent } from './alcohol.component';
import { AlcoholDchosComponent } from './alcohol.dchos.component';
import { AlcoholDetermComponent } from './alcohol.determ.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    SharedAppModule
    
  ],
  declarations: [
    AlcoholComponent,
    AlcoholDchosComponent,
    AlcoholDetermComponent,

    
  ],

  providers: []
})
export class AlcoholModule { }
