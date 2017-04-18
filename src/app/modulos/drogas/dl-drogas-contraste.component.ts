import { Component } from '@angular/core';

import { PruebaDrogas } from '../../data-model/drogas.model';

@Component({
  selector:    'app-drogas-contraste-admin',
  templateUrl: './dl-drogas-contraste.component.html'
})


export class DrogasContrasteComponent {
  
  prueba: PruebaDrogas = new PruebaDrogas();
  
  constructor() { }

  
}

