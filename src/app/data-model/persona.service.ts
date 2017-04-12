import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
//import { of }         from 'rxjs/observable/of';
//import 'rxjs/add/operator/delay';

import { Persona, Personas } from './persona.model';


@Injectable()
export class PersonaService {

  constructor () { console.log("PersonaService: Iniciado")}


  //private personas: Persona[] = [];//Observable<Persona[]>;
  private personas: Persona[] = Personas;


  delayMs = 500;

  // Fake server get; assume nothing can go wrong
  getPersonas(): Persona[] {
    //this.data = of(personas).delay(this.delayMs); // simulate latency with delay
    return (this.personas);
  }

  countItems (): number {
    return (this.personas.length);
  }

  getPersonafromIdx (idx: number): Persona {
    return (this.personas[idx]);
  }

  getIdxfromPersona (prs: Persona):number {
    return (this.personas.indexOf(prs));
  }

  /* Fake server update; assume nothing can go wrong
  updatePersona(persona: Persona): Observable<Persona>  {
    const oldPersona = personas.find(h => h.id === persona.id);
    const newPersona = Object.assign(oldPersona, persona); // Demo: mutate cached hero
    return of(newPersona).delay(this.delayMs); // simulate latency with delay
  }*/

  removePersona(persona: Persona): void {
    this.personas.splice(this.personas.indexOf(persona),1);
  }

  addPersona (): number {
    //const newPersona = new Persona ();
    return (this.personas.push(new Persona ()));
  }
  
}
