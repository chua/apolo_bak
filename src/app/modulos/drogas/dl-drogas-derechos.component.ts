import { Component } from '@angular/core';

import { PruebaDrogas } from '../../data-model/drogas.model';

@Component({
  selector:    'app-drogas-dchos',
  templateUrl: './dl-drogas-derechos.component.html',
  styleUrls: ['./drogas-main.component.css']
})


export class DrogasDchosComponent {
  
  prueba: PruebaDrogas = new PruebaDrogas();
  
  constructor() { }

  
}

