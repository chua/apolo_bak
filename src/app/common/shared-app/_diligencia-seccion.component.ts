import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

//import { Diligencia } from '../../data-model/diligencia.model';

@Component({
  selector: 'diligencia-modulo',
  template: `
      <div *ngIf="seccion=='encabezado'" class="encabezado">
          <span>
              Expediente: <span d-resalte>prueba.expediente.numero</span><br/>
              Policía Local
          </span>
          <img class="logo" src="../../assets/imgs/elche/logo_ayto.png"/>
      </div>
<!--------------------->


<!--------------------->
      <p *ngIf="seccion=='diligencia-cierre'">
          Y para que conste se extiende la presente diligencia que firma, tras leerla y hallarla conforme 
          en unión de los Agentes Instructores. 
      </p>

  `
})


export class DiligenciaSeccionComponent implements OnInit {
  @Input ('seccion') seccion: string;

  constructor() { }

  ngOnInit() {
  }

  cambiarVisible() {

  }

}
