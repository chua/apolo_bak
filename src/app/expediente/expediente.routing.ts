import {Routes} from '@angular/router';

import { MaestrosMainComponent } from './maestros-main.component';
import { ExpedienteDetailComponent } from './expediente-detail.component';
import { ExpedienteListComponent } from './expediente-list.component';
import { PersonaDetailComponent } from './persona-detail.component';
import { PersonaListComponent } from './persona-list.component';
import { VehiculoDetailComponent } from './vehiculo-detail.component';
import { VehiculoListComponent } from './vehiculo-list.component';

export const routes: Routes = [
  { path: '',      component: MaestrosMainComponent},
  { path: 'exp',     component: ExpedienteListComponent },
  { path: 'exp/:id', component: ExpedienteDetailComponent },
  { path: 'prs',     component: PersonaListComponent },
  { path: 'prs/:id', component: PersonaDetailComponent },
  { path: 'veh',    component:  VehiculoListComponent },
  { path: 'veh/:id', component: VehiculoDetailComponent }
];
