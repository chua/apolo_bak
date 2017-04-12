import { Component, OnInit}      from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';

import { Expediente } from '../data-model/expediente.model';
import { ExpedienteService } from '../data-model/expediente.service';



@Component({
  selector: 'app-expediente-detail',
  templateUrl: './expediente-detail.component.html'
})


export class ExpedienteDetailComponent implements OnInit {

  private expedienteId:  number = -1; //apunta la Expediente activa
  private expedientes:   Expediente[];
  private expediente:    Expediente;
  private expedienteErr: boolean = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private ps: ExpedienteService) {}


  ngOnInit() {

    let expedienteCnt: number = this.ps.countItems();
    this.route.params.subscribe((params) => {this.expedienteId = (params['id']);});
    
    //Cuando el parámetro pasado, es incorrecto
    if (isNaN(this.expedienteId) || this.expedienteId <0) {
        this.router.navigate(['/error'])
        console.log ("Índice recurso => error");
        this.expedienteErr = true;
    }    

    //Cuando se ha recargado la página y el array se ha vaciado
    if (expedienteCnt<=0 || this.expedienteId > expedienteCnt) {
        this.router.navigate(['/error'])
        console.log ("Recurso fuera de rango => error");
        this.expedienteErr = true;
    }

    if (!this.expedienteErr) {//its All Right!
        console.log ("DetalleExpediente: cargando -> ".concat(this.expedienteId.toString()));
        this.expediente = this.ps.getExpedientefromIdx(this.expedienteId);
    } else { 
      //evitamos la propagación del error hasta que redirige router...
      //mejorar cuando conozcamos la técnica.
      this.expediente=new Expediente;
    }
  }//ngOnInit

}
