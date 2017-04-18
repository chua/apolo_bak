import { Component } from '@angular/core';


@Component({
  selector: 'app-componente-nav-bar',
  template: `
     <div class="panel panel-info">
        <div class="panel-heading">
                <button type="button" class="btn btn-default" (click)="imprimir()">
                    <span class="glyphicon glyphicon-print" aria-hidden="true"></span>
                </button>
        </div>
     </div>

  `
})



export class ComponenteNavBarComponent {

  constructor() { }

  imprimir () {
      window.print();
  }


}
