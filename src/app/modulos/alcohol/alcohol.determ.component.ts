import { Component, Input} from '@angular/core';
import { PruebaAlcohol } from '../../data-model/alcohol.model';

@Component({
  selector:    'app-alcohol-determ',
  templateUrl: './alcohol.determ.component.html'

})

export class AlcoholDetermComponent {
  @Input() prueba: PruebaAlcohol;
}

