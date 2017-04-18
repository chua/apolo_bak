import { Persona  }   from './persona.model';
import { Vehiculo }   from './vehiculo.model';
import { Expediente } from './expediente.model';


interface Motivos_Prueba {
    control: boolean;
    signos:  boolean;
    infraccion: boolean;
    accidente:  boolean;
}

interface Signos_Prueba {
    g1_nervioso: boolean;
    g1_inadecuado: boolean;
    g1_provocativo: boolean;
    g1_lloroso: boolean;
    g1_adormilado: boolean;
    g1_picores: boolean;
    g1_no_comprende: boolean;
    g1_otras_alteraciones: string;

    g2_temblor: boolean;
    g2_sudoracion: boolean;
    g2_inquietud: boolean;
    g2_resp_superficial: boolean;
    g2_otras_alteraciones: string;

    g3_parpadeo: boolean;
    g3_nariz_roja: boolean;
    g3_esnifa: boolean;
    g3_saliva: boolean;
    g3_olor_porro: boolean;
    g3_otras_alteraciones: string;

    g4_locuacidad: boolean;
    g4_dificultosa: boolean;
    g4_tonobajo: boolean;
    g4_otras_alteraciones: string;

    g5_tambaleante: boolean;
    g5_descoordinado: boolean;
    g5_temblor_gen: boolean;
    g5_temblor_piernas: boolean;
    g5_otras_alteraciones: string;

    g6_conjuntiva: boolean;

    g7_mov_oculares: boolean;

    g8_nistagmo_seguimiento: boolean;
    g8_nistagmo_angmax: boolean;

    g9_pupila_pequena: boolean;
    g9_pupila_grande: boolean;

    g10_reaccion_luz: boolean;

}



export class PruebaDrogas {

    //Expediente
    expediente: Expediente = new Expediente(); //quitar
    //persona
    probante: Persona =new Persona();//quitar
    //vehículo
    vehiculo: Vehiculo = new Vehiculo(); //quitar

    derechos_fecha: Date;
    derechos_hora: Date;

    //Datos de la prueba
    motivo: Motivos_Prueba = {control:false, signos:false, infraccion: false, accidente: false};
    probante_calidad: number = 0; //0 conductor 1 ocupante 2 peatón

    //Que cuerpo y agentes requieren.
    requirente_externo: boolean = true;
    requirente_cuerpo: string;
    requirente_nip_1: string;
    requirente_nip_2: string;

    probante_detenido: boolean = false;
    probante_detenido_motivo: string;

    conforme_prueba: boolean = true;

    signos_previos: Signos_Prueba = {g1_nervioso: true, g1_inadecuado: true, g1_provocativo: true,
                                     g1_lloroso: true,  g1_adormilado: true, g1_picores: true,
                                     g1_no_comprende: true, g1_otras_alteraciones: '',
                                     g2_temblor: true,  g2_sudoracion: true, g2_inquietud: true,
                                     g2_resp_superficial: true, g2_otras_alteraciones: '',
                                     g3_parpadeo: true, g3_nariz_roja: true, g3_esnifa: true,
                                     g3_saliva: true,   g3_olor_porro: true, g3_otras_alteraciones: '',
                                     g4_locuacidad: true, g4_dificultosa: true, g4_tonobajo: true, g4_otras_alteraciones: '',
                                     g5_tambaleante: true, g5_descoordinado: true, g5_temblor_gen: true,
                                     g5_temblor_piernas: true, g5_otras_alteraciones: '', g6_conjuntiva: true,
                                     g7_mov_oculares: true, g8_nistagmo_seguimiento: true, g8_nistagmo_angmax: true,
                                     g9_pupila_pequena: true, g9_pupila_grande: true, g10_reaccion_luz: true, };




    

    

}

