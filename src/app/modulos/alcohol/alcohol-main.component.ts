import { Component, OnInit } from '@angular/core';
import { PruebaAlcohol } from '../../data-model/alcohol.model';





@Component({
  selector: 'app-alcohol',
  templateUrl: './alcohol-main.component.html',

})


export class AlcoholMainComponent {


  private prueba:  PruebaAlcohol = new PruebaAlcohol(); //Preparamos la prueba actual y que se conserve.





  constructor() { }





}




