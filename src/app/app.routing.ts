import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';

export const routes = [
  {
    path: '',
    data: ['Inicio'],
    component: BienvenidoComponent
  }, 
  {
    path: 'error',
    data:[''],
    component: NoEncontradoComponent
  },
  {
    path: 'data',
    data: ['Ficheros'],
    loadChildren: './expediente/expediente.module#ExpedienteModule'
  },
  {
    path: 'alcohol',
    data: ['Alcoholemia'],
    loadChildren: './modulos/alcohol/alcohol.module#AlcoholModule'
  }, /*
  {
    path: '384',
    data: ['Sin Carné'],
    loadChildren: './modulos/384/sincarne.module#SinCarneModule'
  },*/
  {
    path: 'drogas',
    data:['Drogas'],
    loadChildren: './modulos/drogas/drogas.module#DrogasModule'
  },
  {
    path: '**',
    data:[''],
    redirectTo: '/error'
  }
];
