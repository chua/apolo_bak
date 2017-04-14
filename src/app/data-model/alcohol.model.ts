import { Persona  }  from './persona.model';
import { Vehiculo }  from './vehiculo.model';
import { Expediente} from './expediente.model';
import { Diligencia} from './diligencia.model';


interface Motivos_Prueba {
    control: boolean;
    signos:  boolean;
    infraccion: boolean;
    accidente:  boolean;
}


export class PruebaAlcohol {

    //Expediente
    expediente: Expediente = new Expediente(); //quitar
    //persona
    probante: Persona =new Persona();//quitar
    //vehículo
    vehiculo: Vehiculo = new Vehiculo(); //quitar
    
    //Diligencia derechos
    derechos_cfg: Diligencia = new Diligencia('Derechos y Garantías de la prueba');

    //impregnación
    determina_cfg: Diligencia = new Diligencia('Impregnación Alcohólica');


    //tickets

    //signos
    



    probante_detenido: boolean = false;
    probante_calidad: number = 0; //0 conductor 1 ocupante 2 peatón

    //diligencia -> derechos

    motivo: Motivos_Prueba = {control:false, signos:false, infraccion: false, accidente: false};

    

}

