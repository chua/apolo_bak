import { Component, OnInit } from '@angular/core';

import { PruebaDrogas } from './drogas.model';


@Component({
  templateUrl: './drogas-main.component.html',


})
export class DrogasMainComponent implements OnInit {

  

  private prueba:  PruebaDrogas = new PruebaDrogas(); //Preparamos la prueba actual y que se conserve.

  
  

  //paneles
  isCollapsed: boolean = true;



  constructor() { }

  ngOnInit() {console.log("Drogas Init");}
 
  
  collapsed (i:any) {

  }
  expanded (i:any) {}

  testing(i:any) {
    console.log(i);
    
  }

}
