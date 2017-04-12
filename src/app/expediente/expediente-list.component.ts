import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Expediente }        from '../data-model/expediente.model';
import { ExpedienteService } from '../data-model/expediente.service';



@Component({
  selector: 'app-expediente-list',
  templateUrl: './expediente-list.component.html'
})


export class ExpedienteListComponent implements OnInit {

  private expedientes: Expediente[];

  constructor(private es: ExpedienteService,
              private router: Router) { }


  ngOnInit() { 
    this.getExpedientes(); 
  }


  getExpedientes() {
    this.expedientes = this.es.getExpedientes();    
  }


  select(expediente: Expediente) { 
    let id = this.es.getIdxfromExpediente(expediente);
    this.router.navigate(['data/exp/', id])
    console.log ("redirigiendo a Expediente: ".concat(id.toString()));
  }

  remove (Expediente: Expediente) {
    //reconverteir
    this.es.removeExpediente(Expediente);
  }

  add () {
    let idx = this.es.addExpediente()-1; //devuelve el numero de items del array, corregimos el inicio en 0
    console.log ("añadido nueva Expediente: idx->".concat(idx.toString()));
    this.select(this.expedientes[idx]);
  }

}
