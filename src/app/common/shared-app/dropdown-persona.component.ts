import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { PersonaService } from '../../data-model/persona.service';
import { Persona }        from '../../data-model/persona.model';

@Component({
  selector: 'app-dropdown-persona',
  template: `
    <select class="form-control" (change)="selectPersona($event.target.value)">
      <option value="-1" disabled>Selecciona una persona de la lista</option>
      <option *ngFor="let prs of personas"
              value="{{this.ps.getIdxfromPersona(prs)}}"
              [selected]="personas.length==1"> 
                {{prs.apellidos_nombre}} 
      </option>
    </select>
    <div *ngIf="personas.length<1">
      <div class="alert alert-danger" role="alert">
        <span class="glyphicon glyphicon-warning-sign" aria-hidden="true"></span>
        No hay personas que mostrar...
      </div>
    </div> `
})


export class DropdownPersonaComponent implements OnInit {
  @Output('selected') selected: EventEmitter <Persona> = new EventEmitter<Persona>();

  private personas: Persona[];
  private persona: Persona;

  constructor(private ps: PersonaService) { }

  ngOnInit() {
    this.personas = this.ps.getPersonas(); 
    //autoseleccionado de persona
    if (this.personas.length == 1) {this.selectPersona(0)}
  }

  selectPersona (idx: number) {
    this.selected.emit(this.ps.getPersonafromIdx(idx));
  }
}
