import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Diligencia } from '../../data-model/diligencia.model';

@Component({
  selector: 'app-diligencia-nav-bar',
  template: `

    <button type="button" class="btn btn-default" (click)="cambiarVisible()">
        <span class="glyphicon" aria-hidden="true"
                [class.glyphicon-eye-open] = "visible"
                [class.glyphicon-eye-close]= "!visible"
                ></span>
    </button>

    <button type="button" class="btn btn-default" (click)="imprimir()">
        <span class="glyphicon glyphicon-print" aria-hidden="true"></span>
    </button>

    <button type="button" class="btn btn-default" (click)="copiar()">
        <span class="glyphicon glyphicon-copy" aria-hidden="true"></span>
    </button>
    {{diligencia.titulo}}
  
  `,


  /*
  `
  <nav class="navbar navbar-default">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="btn btn-default" (click)="cambiarVisible()">
                <span class="glyphicon" aria-hidden="true"
                      [class.glyphicon-eye-open] = "visible"
                      [class.glyphicon-eye-close]= "!visible"
                      ></span>
            </button>

            <button type="button" class="btn btn-default" (click)="imprimir()">
                <span class="glyphicon glyphicon-print" aria-hidden="true"></span>
            </button>

            <button type="button" class="btn btn-default" (click)="copiar()">
                <span class="glyphicon glyphicon-copy" aria-hidden="true"></span>
            </button>
            {{diligencia.titulo}}
        </div>
    </div>
  </nav>
  `,*/
  styles: [`

  `]
})


export class DiligenciaNavBarComponent implements OnInit {
  @Input ('diligencia') diligencia:  Diligencia;

  constructor() { }

  ngOnInit() {//this.visible = this.iVisible
  }

  cambiarVisible() {
      this.diligencia.visible = !this.diligencia.visible;
      //this.visible = !this.visible;
     // this.oVisible.emit(this.visible);
  }

  copiar () {
      
  }

  imprimir () {
      window.print();
  }


}
