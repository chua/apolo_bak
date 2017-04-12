import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Vehiculo }          from '../../data-model/vehiculo.model';
import { VehiculoService }   from '../../data-model/vehiculo.service';

@Component({
  selector: 'app-dropdown-vehiculo',
  template: `
    <select class="form-control" (change)="selectVehiculo($event.target.value)">
      <option value="-1" disabled>Selecciona un vehículo de la lista</option>
      <option *ngFor="let veh of vehiculos"
              value="{{this.vs.getIdxfromVehiculo(veh)}}"
              [selected]="vehiculos.length==1"> 
                {{veh.marca_modelo}} - {{veh.matricula? veh.matricula : veh.bastidor}}
      </option>
    </select>
    <div *ngIf="vehiculos.length<1">
      <div class="alert alert-danger" role="alert">
        <span class="glyphicon glyphicon-warning-sign" aria-hidden="true"></span>
        No hay vehiculos que mostrar...
      </div>
    </div> ` 
})

export class DropdownVehiculoComponent implements OnInit {
  @Output('selected') selected: EventEmitter <Vehiculo> = new EventEmitter<Vehiculo>();

  private vehiculos: Vehiculo [];
  private vehiculo:  Vehiculo = new Vehiculo;

  constructor(private vs: VehiculoService) { }

  ngOnInit() {
    this.vehiculos = this.vs.getVehiculos(); 
    //autoseleccionado de persona
    if (this.vehiculos.length == 1) {this.selectVehiculo(0)}
  }

  selectVehiculo (idx: number) {
    //this.VehiculoId = idx;
    this.selected.emit(this.vs.getVehiculofromIdx(idx));   
  }

}
