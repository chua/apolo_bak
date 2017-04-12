import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Vehiculo }        from '../data-model/vehiculo.model';
import { VehiculoService } from '../data-model/vehiculo.service';



@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html'
})


export class VehiculoListComponent implements OnInit {

  private vehiculos: Vehiculo[];

  constructor(private vs: VehiculoService,
              private router: Router) { }


  ngOnInit() { 
    this.getVehiculos(); 
  }


  getVehiculos() {
    this.vehiculos = this.vs.getVehiculos();    
  }


  select(vehiculo: Vehiculo) { 
    let id = this.vs.getIdxfromVehiculo(vehiculo);
    this.router.navigate(['data/veh/', id])
    console.log ("redirigiendo a Vehiculo: ".concat(id.toString()));
  }

  remove (vehiculo: Vehiculo) {
    //reconverteir
    this.vs.removeVehiculo(vehiculo);
  }

  add () {
    let idx = this.vs.addVehiculo()-1; //devuelve el numero de items del array, corregimos el inicio en 0
    console.log ("añadido nueva Vehiculo: idx->".concat(idx.toString()));
    this.select(this.vehiculos[idx]);
  }

}
