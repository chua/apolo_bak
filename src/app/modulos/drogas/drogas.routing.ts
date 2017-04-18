import {Routes} from '@angular/router';

import { DrogasMainComponent } from './drogas-main.component';
import { DrogasDchosComponent } from './dl-drogas-derechos.component';
import { DrogasIndiciarioComponent } from './dl-drogas-indiciario.component';
import { DrogasSignosPreviosComponent} from './dl-drogas-signos-previos.component';
import { DrogasConfirmaAdminComponent} from './dl-drogas-confirma-admin.component';
import { DrogasConfirmaPenalComponent} from './dl-drogas-confirma-penal.component';
import { DrogasContrasteComponent} from './dl-drogas-contraste.component';
import { DrogasSignosExternosComponent} from './dl-drogas-signos-externos.component';

export const routes: Routes = [
  { path: '',    component: DrogasMainComponent },
  { path: 'dl-drg-dchos',  component: DrogasDchosComponent },
  { path: 'dl-drg-indicio',component: DrogasIndiciarioComponent},
  { path: 'dl-drg-sg-prev',component: DrogasSignosPreviosComponent},
  { path: 'dl-drg-conf-a',component: DrogasConfirmaAdminComponent},
  { path: 'dl-drg-conf-p',component: DrogasConfirmaPenalComponent},
  { path: 'dl-drg-contraste',component: DrogasContrasteComponent},
  { path: 'dl-drg-sg-penal',component: DrogasSignosExternosComponent},

];


