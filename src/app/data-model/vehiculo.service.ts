import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Vehiculo, Vehiculos } from './vehiculo.model';


@Injectable()
export class VehiculoService {

  constructor () { console.log("VehiculoService: Iniciado")}

  private vehiculos: Vehiculo[] = Vehiculos;


  // Fake server get; assume nothing can go wrong
  getVehiculos(): Vehiculo[] {
    return (this.vehiculos);
  }

  countItems (): number {
    return (this.vehiculos.length);
  }

  getVehiculofromIdx (idx: number): Vehiculo {
    return (this.vehiculos[idx]);
  }

  getIdxfromVehiculo (prs: Vehiculo):number {
    return (this.vehiculos.indexOf(prs));
  }

  removeVehiculo(vehiculo: Vehiculo): void {
    this.vehiculos.splice(this.vehiculos.indexOf(vehiculo),1);
  }

  addVehiculo (): number {
    return (this.vehiculos.push(new Vehiculo ()));
  }
  
}
