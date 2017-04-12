import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alcohol',
  templateUrl: './alcohol.component.html',
  styleUrls: ['./alcohol.component.css']
})
export class AlcoholComponent implements OnInit {


   derechos_fecha: Date = new Date();
   derechos_hora: Date = new Date();

   visible: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  bla() {
    this.visible = !this.visible;
  }

}
