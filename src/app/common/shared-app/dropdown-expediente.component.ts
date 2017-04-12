import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Expediente }        from '../../data-model/expediente.model';
import { ExpedienteService } from '../../data-model/expediente.service';

@Component({
  selector: 'app-dropdown-expediente',
  template: `
    <select class="form-control" (change)="selectExpediente($event.target.value)">
      <option value="-1" disabled>Selecciona un expediente de la lista</option>
      <option *ngFor="let exp of expedientes"
              value="{{this.es.getIdxfromExpediente(exp)}}"
              [selected]="expedientes.length==1"> 
                {{exp.numero}} - {{exp.actuacion_lugar}}
      </option>
    </select>
    <div *ngIf="expedientes.length<1">
      <div class="alert alert-danger" role="alert">
        <span class="glyphicon glyphicon-warning-sign" aria-hidden="true"></span>
        No hay expedientes que mostrar...
      </div>
    </div> ` 
})


export class DropdownExpedienteComponent implements OnInit {
  @Output('selected') selected: EventEmitter <Expediente> = new EventEmitter<Expediente>();

  private expedientes: Expediente[];
  private expediente : Expediente;

  constructor(private es: ExpedienteService) { }

  ngOnInit() {
    this.expedientes = this.es.getExpedientes(); 
    //autoseleccionado de persona
    if (this.expedientes.length == 1) {this.selectExpediente(0)}
  }

  selectExpediente (idx: number) {
    //this.expedienteId = idx;
    this.selected.emit(this.es.getExpedientefromIdx(idx));   
  }

}
