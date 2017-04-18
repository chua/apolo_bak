import { Component, OnInit } from '@angular/core';

import { PruebaDrogas } from '../../data-model/drogas.model';


@Component({
  templateUrl: './drogas-main.component.html',


})
export class DrogasMainComponent implements OnInit {


  //todo: hacer que la recuerde
  prueba: PruebaDrogas = new PruebaDrogas();
  
  ngOnInit() {console.log("Drogas Init");}
 
    
  

}
