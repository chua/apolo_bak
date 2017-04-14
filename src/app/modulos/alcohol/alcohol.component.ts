import { Component, OnInit } from '@angular/core';
import { PruebaAlcohol } from '../../data-model/alcohol.model';





@Component({
  selector: 'app-alcohol',
  templateUrl: './alcohol.component.html',

})


export class AlcoholComponent {


  private prueba:  PruebaAlcohol = new PruebaAlcohol(); //Preparamos la prueba actual y que se conserve.





  constructor() { }





}




