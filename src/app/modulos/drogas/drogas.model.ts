import { Persona  }  from '../../data-model/persona.model';
import { Vehiculo }  from '../../data-model/vehiculo.model';
import { Expediente} from '../../data-model/expediente.model';


interface Motivos_Prueba {
    control: boolean;
    signos:  boolean;
    infraccion: boolean;
    accidente:  boolean;
}


export class PruebaDrogas {

    //Expediente
    expediente: Expediente = new Expediente(); //quitar
    //persona
    probante: Persona =new Persona();//quitar
    //vehículo
    vehiculo: Vehiculo = new Vehiculo(); //quitar
    //Datos de la prueba

    probante_detenido: boolean = false;
    probante_calidad: number = 0; //0 conductor 1 ocupante 2 peatón

    //diligencia -> derechos
    derechos_fecha: Date;
    derechos_hora: Date;
    motivo: Motivos_Prueba = {control:false, signos:false, infraccion: false, accidente: false};

    

}

