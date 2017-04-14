import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Diligencia } from '../../data-model/diligencia.model';

@Component({
  selector: 'app-diligencia-nav-bar',
  template: `
    <div class="well" (click)="cambiarVisible()">
        <span class="glyphicon" aria-hidden="true" 
            [class.glyphicon-triangle-right] = "diligencia.visible"
            [class.glyphicon-triangle-bottom]= "!diligencia.visible">
        </span>
        &nbsp;
        {{diligencia.titulo}}
    </div>
  `
})


export class DiligenciaNavBarComponent implements OnInit {
  @Input ('diligencia') diligencia:  Diligencia;

  constructor() { }

  ngOnInit() {//this.visible = this.iVisible
  }

  cambiarVisible() {
      this.diligencia.visible = !this.diligencia.visible;
  }

}
