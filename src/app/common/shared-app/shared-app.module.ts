import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownExpedienteComponent } from './dropdown-expediente.component';
import { DropdownPersonaComponent } from './dropdown-persona.component';
import { DropdownVehiculoComponent } from './dropdown-vehiculo.component';
import { CampoResaltadoDirective }  from './campo-resaltado.directive';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [

        DropdownExpedienteComponent,
        DropdownPersonaComponent,
        DropdownVehiculoComponent,
        CampoResaltadoDirective,
    ],
    exports: [
        DropdownExpedienteComponent,
        DropdownPersonaComponent,
        DropdownVehiculoComponent,
        CampoResaltadoDirective,
    ]

})

export class SharedAppModule {

}