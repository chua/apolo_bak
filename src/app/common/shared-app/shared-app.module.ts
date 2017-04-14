import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownExpedienteComponent } from './dropdown-expediente.component';
import { DropdownPersonaComponent } from './dropdown-persona.component';
import { DropdownVehiculoComponent } from './dropdown-vehiculo.component';
import { ComponenteNavBarComponent } from './component-nav-bar.component';
import { DiligenciaNavBarComponent } from './diligencia-nav-bar.component';
import { DiligenciaSeccionComponent} from './diligencia-seccion.component';
import { CampoResaltadoDirective }  from './campo-resaltado.directive';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [

        DropdownExpedienteComponent,
        DropdownPersonaComponent,
        DropdownVehiculoComponent,
        ComponenteNavBarComponent,
        DiligenciaNavBarComponent,
        DiligenciaSeccionComponent,
        CampoResaltadoDirective,
    ],
    exports: [
        DropdownExpedienteComponent,
        DropdownPersonaComponent,
        DropdownVehiculoComponent,
        ComponenteNavBarComponent,
        DiligenciaNavBarComponent,
        DiligenciaSeccionComponent,
        CampoResaltadoDirective,
    ]

})

export class SharedAppModule {

}