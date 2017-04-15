import { Component, Input} from '@angular/core';

import { Config }    from '../../data-model/config.model';
import { Persona }           from '../../data-model/persona.model';
import { Expediente }        from '../../data-model/expediente.model';
import { Vehiculo }          from '../../data-model/vehiculo.model';

import { PruebaDrogas } from './drogas.model';



@Component({
  selector:    'app-drogas-dchos',
  templateUrl: './dl-drogas-derechos.component.html'
})


export class DrogasDchosComponent {

  probante: Persona =new Persona();
  probante_detenido: boolean = false;
  probante_calidad: number = 0; //0 conductor 1 ocupante 2 peatón
  
  constructor() { }

  
}

