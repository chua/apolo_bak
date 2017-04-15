import {Routes} from '@angular/router';

import { DrogasMainComponent } from './drogas-main.component';
import { DrogasDchosComponent } from './dl-drogas-derechos.component';

export const routes: Routes = [
  { path: '',    component: DrogasMainComponent },
  { path: 'dl-drg-dchos', component: DrogasDchosComponent }

];
