import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { routes } from './expediente.routing';

import { MaestrosMainComponent } from './maestros-main.component';
import { ExpedienteDetailComponent } from './expediente-detail.component';
import { ExpedienteListComponent } from './expediente-list.component';
import { PersonaDetailComponent } from './persona-detail.component';
import { PersonaListComponent } from './persona-list.component';
import { VehiculoDetailComponent } from './vehiculo-detail.component';
import { VehiculoListComponent } from './vehiculo-list.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    MaestrosMainComponent,
    ExpedienteDetailComponent,
    ExpedienteListComponent,
    PersonaListComponent,
    PersonaDetailComponent,
    VehiculoListComponent,
    VehiculoDetailComponent
  ]
})
export class ExpedienteModule { }
