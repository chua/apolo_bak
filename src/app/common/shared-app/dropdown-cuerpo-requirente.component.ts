import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-dropdown-cuerpo-requirente',
  template: `
    <select class="form-control" (change)="selectRequirente($event.target.value)">
      <option value="0" selected>Instructor y Secretario</option>
      <option value="1">Esta policía local</option>
      <option value="2">Policía Nacional</option>
      <option value="3">Guardia Civil</option>
      <option value="4">Agente de Movilidad Urbana</option>
    </select>`
})


export class DropdownCuerpoRequirenteComponent {
  @Output('selected') selected: EventEmitter <number> = new EventEmitter<number>();

  selectRequirente (idx: number) {
    this.selected.emit(idx);
  }
}
