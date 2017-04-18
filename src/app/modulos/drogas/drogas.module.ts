import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedAppModule } from '../../common/shared-app/shared-app.module';



import { CollapseModule } from 'ng2-bootstrap';

import { RouterModule } from '@angular/router';
import { routes } from './drogas.routing';



import { DrogasMainComponent } from './drogas-main.component';
import { DrogasDchosComponent } from './dl-drogas-derechos.component';
import { DrogasIndiciarioComponent } from './dl-drogas-indiciario.component';
import { DrogasSignosPreviosComponent} from './dl-drogas-signos-previos.component';
import { DrogasConfirmaAdminComponent} from './dl-drogas-confirma-admin.component';
import { DrogasConfirmaPenalComponent} from './dl-drogas-confirma-penal.component';
import { DrogasContrasteComponent} from './dl-drogas-contraste.component';
import { DrogasSignosExternosComponent} from './dl-drogas-signos-externos.component';


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
    DrogasIndiciarioComponent,
    DrogasSignosPreviosComponent,
    DrogasConfirmaAdminComponent,
    DrogasConfirmaPenalComponent,
    DrogasContrasteComponent,
    DrogasSignosExternosComponent
    
  //  CampoResaltadoDirective
    
  ],


  providers: []
})
export class DrogasModule { }
