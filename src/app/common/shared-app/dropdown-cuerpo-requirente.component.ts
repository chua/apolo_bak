import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-dropdown-cuerpo-requirente',
  template: `
    <select class="form-control" (change)="selectRequirente($event.target.value)">
      <option value="0" selected>Por los agentes actuantes</option>
      <option value="1">Otros agentes de esta Policía Local</option>
      <option value="2">Funcionarios de Policía Nacional</option>
      <option value="3">Funcionarios de Guardia Civil</option>
      <option value="4">Agente/s de Movilidad Urbana</option>
    </select>`
})


export class DropdownCuerpoRequirenteComponent {
  @Output('selected') selected: EventEmitter <number> = new EventEmitter<number>();

  selectRequirente (idx: number) {
    this.selected.emit(idx);
  }
}
