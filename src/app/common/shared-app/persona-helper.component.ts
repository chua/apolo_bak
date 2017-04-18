import { Component, Input, OnInit } from '@angular/core';

import { Persona } from '../../data-model/persona.model';

@Component({
  selector:    'persona-helper',
  templateUrl: './persona-helper.component.html'
})


export class PersonaHelperComponent implements OnInit{
  @Input ('persona') persona: Persona ;
  //@Input ('helper')  helper:  string;

  ngOnInit () {
    //if (this.persona === undefined) this.persona = new Persona();
  }




}
