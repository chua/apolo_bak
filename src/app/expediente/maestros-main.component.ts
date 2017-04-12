import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Expediente }        from '../data-model/expediente.model';
import { ExpedienteService } from '../data-model/expediente.service';
import { PersonaDetailComponent } from './persona-detail.component';
import { PersonaListComponent } from './persona-list.component';
import { VehiculoDetailComponent } from './vehiculo-detail.component';
import { VehiculoListComponent } from './vehiculo-list.component';



@Component({
  templateUrl: './maestros-main.component.html'
})


export class MaestrosMainComponent implements OnInit {




  ngOnInit() { 
    
  }


}
