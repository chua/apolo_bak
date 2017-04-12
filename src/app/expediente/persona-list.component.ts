import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Persona }        from '../data-model/persona.model';
import { PersonaService } from '../data-model/persona.service';



@Component({
  selector: 'app-persona-list',
  templateUrl: './persona-list.component.html'
})


export class PersonaListComponent implements OnInit {

  private personas: Persona[];

  constructor(private ps: PersonaService,
              private router: Router) { }


  ngOnInit() { 
    this.getPersonas(); 
  }


  getPersonas() {
    this.personas = this.ps.getPersonas();    
  }


  select(persona: Persona) { 
    let id = this.ps.getIdxfromPersona(persona);
    this.router.navigate(['data/prs/', id])
    console.log ("redirigiendo a persona: ".concat(id.toString()));
  }

  remove (persona: Persona) {
    //reconverteir
    this.ps.removePersona(persona);
  }

  add () {
    let idx = this.ps.addPersona()-1; //devuelve el numero de items del array, corregimos el inicio en 0
    console.log ("añadido nueva persona: idx->".concat(idx.toString()));
    this.select(this.personas[idx]);
  }

}
