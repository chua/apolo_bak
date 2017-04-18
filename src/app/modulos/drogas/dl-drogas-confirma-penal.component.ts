import { Component } from '@angular/core';

import { PruebaDrogas } from '../../data-model/drogas.model';

@Component({
  selector:    'app-drogas-confirma-admin',
  templateUrl: './dl-drogas-confirma-penal.component.html'
})


export class DrogasConfirmaPenalComponent {
  
  prueba: PruebaDrogas = new PruebaDrogas();
  
  constructor() { }

  
}

