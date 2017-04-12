import { Component, Input} from '@angular/core';

import { Config }    from '../../data-model/config.model';
import { Persona }           from '../../data-model/persona.model';
import { Expediente }        from '../../data-model/expediente.model';
import { Vehiculo }          from '../../data-model/vehiculo.model';

import { PruebaDrogas } from './drogas.model';



@Component({
  selector: 'app-drogas-dchos',
  templateUrl: './drogas-01-dchos.component.html'
})


export class DrogasDchosComponent {
  @Input() prueba: PruebaDrogas;

  
  constructor() { }

  
}

