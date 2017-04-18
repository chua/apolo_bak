import { Component, Input } from '@angular/core';



@Component({
  selector: 'encabezado-helper',
  template: `
    <div class="encabezado">
      <div class="texto">
        Policía Local<br/>
        Expediente número: {{exp_numero?exp_numero:'_________________'}}
      </div>
      <img class="logo" src="../../assets/imgs/elche/logo_ayto.png"/>
    </div>
  `

})


export class EncabezadoHelperComponent {
  @Input ('expediente') exp_numero: string;


  constructor() { }



}
