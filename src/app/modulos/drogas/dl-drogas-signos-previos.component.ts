import { Component } from '@angular/core';

import { PruebaDrogas } from '../../data-model/drogas.model';

@Component({
  selector:    'app-drogas-signos-previos',
  templateUrl: './dl-drogas-signos-previos.component.html',
  styleUrls: ['./drogas-main.component.css']
})


export class DrogasSignosPreviosComponent {

  prueba: PruebaDrogas = new PruebaDrogas();
  
  constructor() { }

}

