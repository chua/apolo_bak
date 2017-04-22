import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownExpedienteComponent } from './dropdown-expediente.component';
import { DropdownPersonaComponent } from './dropdown-persona.component';
import { DropdownPersonaCalidadComponent } from './dropdown-persona-calidad.component';
import { DropdownCuerpoRequirenteComponent } from './dropdown-cuerpo-requirente.component';
import { DropdownVehiculoComponent } from './dropdown-vehiculo.component';
import { PersonaHelperComponent } from './persona-helper.component';
import { EncabezadoHelperComponent } from './encabezado-helper.component';

import { CampoResaltadoDirective }  from './campo-resaltado.directive';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [

        DropdownExpedienteComponent,
        DropdownPersonaComponent,
        DropdownPersonaCalidadComponent,
        DropdownVehiculoComponent,
        DropdownCuerpoRequirenteComponent,
        EncabezadoHelperComponent,
        PersonaHelperComponent,
        CampoResaltadoDirective,
    ],
    exports: [
        DropdownExpedienteComponent,
        DropdownPersonaComponent,
        DropdownPersonaCalidadComponent,
        DropdownVehiculoComponent,
        DropdownCuerpoRequirenteComponent,
        EncabezadoHelperComponent,
        PersonaHelperComponent,
        CampoResaltadoDirective,
    ]

})

export class SharedAppModule {

}