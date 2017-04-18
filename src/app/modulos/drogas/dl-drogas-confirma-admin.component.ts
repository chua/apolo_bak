import { Component } from '@angular/core';

import { PruebaDrogas } from '../../data-model/drogas.model';

@Component({
  selector:    'app-drogas-confirma-admin',
  templateUrl: './dl-drogas-confirma-admin.component.html'
})


export class DrogasConfirmaAdminComponent {
  
  prueba: PruebaDrogas = new PruebaDrogas();
  
  constructor() { }

  
}

