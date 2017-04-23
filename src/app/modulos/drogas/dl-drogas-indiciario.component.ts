import { Component } from '@angular/core';

import { PruebaDrogas } from '../../data-model/drogas.model';

@Component({
  selector:    'app-drogas-indiciario',
  templateUrl: './dl-drogas-indiciario.component.html',
  styleUrls: ['./drogas-main.component.css']
})


export class DrogasIndiciarioComponent {

  prueba: PruebaDrogas = new PruebaDrogas();
  
  constructor() { }

}

