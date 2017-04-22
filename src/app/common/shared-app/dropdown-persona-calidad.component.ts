import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown-persona-calidad',
  template: `
    <select class="form-control" (change)="selectCalidad($event.target.value)">
      <option value="-1" disabled>El implicado participa en calidad de:</option>
      <option value="0">Conductor</option>
      <option value="1">Ocupante</option>
      <option value="2">Peatón</option>
    </select>`
})


export class DropdownPersonaCalidadComponent {
  @Output('selected') selected: EventEmitter <number> = new EventEmitter<number>();

  selectCalidad (idx: number) {
    this.selected.emit(idx);
  }
}
