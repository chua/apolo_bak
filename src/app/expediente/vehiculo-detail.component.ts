import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';

import { Vehiculo } from '../data-model/vehiculo.model';
import { VehiculoService } from '../data-model/vehiculo.service';



@Component({
  selector: 'app-vehiculo-detail',
  templateUrl: './vehiculo-detail.component.html'
})


export class VehiculoDetailComponent implements OnInit {

  private vehiculoId:  number = -1; //apunta la vehiculo activa
  private vehiculos:   Vehiculo[];
  private vehiculo:    Vehiculo;
  private vehiculoErr: boolean = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private vs: VehiculoService) {}


  ngOnInit() {

    let vehiculoCnt: number = this.vs.countItems();
    this.route.params.subscribe((params) => {this.vehiculoId = (params['id']);});
    
    //Cuando el parámetro pasado, es incorrecto
    if (isNaN(this.vehiculoId) || this.vehiculoId <0) {
        this.router.navigate(['/error'])
        console.log ("Índice recurso => error");
        this.vehiculoErr = true;
    }    

    //Cuando se ha recargado la página y el array se ha vaciado
    if (vehiculoCnt<=0 || this.vehiculoId > vehiculoCnt) {
        this.router.navigate(['/error'])
        console.log ("Recurso fuera de rango => error");
        this.vehiculoErr = true;
    }

    if (!this.vehiculoErr) {//its All Right!
        console.log ("Detallevehiculo: cargando -> ".concat(this.vehiculoId.toString()));
        this.vehiculo = this.vs.getVehiculofromIdx(this.vehiculoId);
    } else { 
      //evitamos la propagación del error hasta que redirige router...
      //mejorar cuando conozcamos la técnica.
      this.vehiculo=new Vehiculo;
    }
  }//ngOnInit

}
