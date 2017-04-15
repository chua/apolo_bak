import {Routes} from '@angular/router';

import { SangreMainComponent } from './sangre-main.component';
import { OfSangreVoluntarioComponent } from './of-sangre-voluntario.component';

export const routes: Routes = [
  { path: '',     component: SangreMainComponent },
  { path: 'ofmv', component: OfSangreVoluntarioComponent }
];
