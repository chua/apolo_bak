import { Component, Input} from '@angular/core';
import { PruebaAlcohol } from '../../data-model/alcohol.model';

@Component({
  selector: 'app-alcohol-dchos',
  templateUrl: './alcohol.dchos.component.html'

})

export class AlcoholDchosComponent {
  @Input() prueba: PruebaAlcohol;
}

