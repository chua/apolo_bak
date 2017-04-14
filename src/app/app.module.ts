import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { routes } from './app.routing';

import { AppComponent } from './app.component';

import { SharedAppModule } from './common/shared-app/shared-app.module';


import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { MainMenuComponent } from './common/app-menu/app-menu.component';
import { TopMenuComponent } from './common/top-menu/top-menu.component';
import { BusquedaActaPipe } from './common/app-menu/search-filter.pipe';
import { AppFooterComponent } from './common/app-footer/app-footer.component';

//Servicios
import { PersonaService } from './data-model/persona.service';
import { ExpedienteService } from './data-model/expediente.service';
import { VehiculoService } from './data-model/vehiculo.service';


@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    TopMenuComponent,
    MainMenuComponent,
    BusquedaActaPipe,
    AppFooterComponent,
    NoEncontradoComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, {useHash: true}),
    SharedAppModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es_ES'},
    ExpedienteService,
    PersonaService,
    VehiculoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
