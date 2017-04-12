import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';

import { Persona } from '../data-model/persona.model';
import { PersonaService } from '../data-model/persona.service';



@Component({
  selector: 'app-persona-detail',
  templateUrl: './persona-detail.component.html'
})


export class PersonaDetailComponent implements OnInit {

  private personaId:  number = -1; //apunta la persona activa
  private personas:   Persona[];
  private persona:    Persona;
  private personaErr: boolean = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private ps: PersonaService) {}


  ngOnInit() {

    let personaCnt: number = this.ps.countItems();
    this.route.params.subscribe((params) => {this.personaId = (params['id']);});
    
    //Cuando el parámetro pasado, es incorrecto
    if (isNaN(this.personaId) || this.personaId <0) {
        this.router.navigate(['/error'])
        console.log ("Índice recurso => error");
        this.personaErr = true;
    }    

    //Cuando se ha recargado la página y el array se ha vaciado
    if (personaCnt<=0 || this.personaId > personaCnt) {
        this.router.navigate(['/error'])
        console.log ("Recurso fuera de rango => error");
        this.personaErr = true;
    }

    if (!this.personaErr) {//its All Right!
        console.log ("DetallePersona: cargando -> ".concat(this.personaId.toString()));
        this.persona = this.ps.getPersonafromIdx(this.personaId);
    } else { 
      //evitamos la propagación del error hasta que redirige router...
      //mejorar cuando conozcamos la técnica.
      this.persona=new Persona;
    }
  }//ngOnInit

}
