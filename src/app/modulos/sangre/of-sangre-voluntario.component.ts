import { Component } from '@angular/core';

import { Persona  }  from '../../data-model/persona.model';
//import { Vehiculo }  from './vehiculo.model';
//import { Expediente} from './expediente.model';


    //Expediente
   // expediente: Expediente = new Expediente(); //quitar
    //persona
    

@Component({

  templateUrl: './of-sangre-voluntario.component.html',


})
export class OfSangreVoluntarioComponent {

  probante: Persona =new Persona();
  hospital_destino: string;
  fecha: Date;
  hora:  Date;


  constructor() { }


 
  
  

}
