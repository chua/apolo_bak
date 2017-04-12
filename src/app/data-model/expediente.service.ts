import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Expediente, Expedientes } from './expediente.model';


@Injectable()
export class ExpedienteService {

  constructor () { console.log("ExpedienteService: Iniciado")}

  private Expedientes: Expediente[] = Expedientes;


  // Fake server get; assume nothing can go wrong
  getExpedientes(): Expediente[] {
    return (this.Expedientes);
  }

  countItems (): number {
    return (this.Expedientes.length);
  }

  getExpedientefromIdx (idx: number): Expediente {
    return (this.Expedientes[idx]);
  }

  getIdxfromExpediente (prs: Expediente):number {
    return (this.Expedientes.indexOf(prs));
  }

  removeExpediente(Expediente: Expediente): void {
    this.Expedientes.splice(this.Expedientes.indexOf(Expediente),1);
  }

  addExpediente (): number {
    return (this.Expedientes.push(new Expediente ()));
  }
  
}
