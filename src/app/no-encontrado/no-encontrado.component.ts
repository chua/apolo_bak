import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-no-encontrado',
  templateUrl: './no-encontrado.component.html',
  styleUrls: ['./no-encontrado.component.css']
})


export class NoEncontradoComponent implements OnInit {
@Input() textoError: string;


  constructor() { }

  ngOnInit() {
    if (typeof this.textoError === 'undefined'){
      this.textoError ="Se ha producido un error inesperado"
    }

  }

}
