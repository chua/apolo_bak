import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownExpedienteComponent } from './dropdown-expediente.component';
import { DropdownPersonaComponent } from './dropdown-persona.component';
import { DropdownVehiculoComponent } from './dropdown-vehiculo.component';
import { DiligenciaNavBarComponent } from './diligencia-nav-bar.component';
import { CampoResaltadoDirective }  from './campo-resaltado.directive';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [

        DropdownExpedienteComponent,
        DropdownPersonaComponent,
        DropdownVehiculoComponent,
        DiligenciaNavBarComponent,
        CampoResaltadoDirective,
    ],
    exports: [
        DropdownExpedienteComponent,
        DropdownPersonaComponent,
        DropdownVehiculoComponent,
        DiligenciaNavBarComponent,
        CampoResaltadoDirective,
    ]

})

export class SharedAppModule {

}