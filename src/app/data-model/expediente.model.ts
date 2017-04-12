export class Expediente {
    id: string; //reservado para sincro
    numero: string;
    proceso?: string;
    instructor: string;
    secretario: string;
    //a requerimiento
    requirente_cuerpo?: number;
    requirente_agentes?: string;
    //lugar actuación
    ciudad: string;
    lugar: string;

    actuacion_fecha?: Date;
    //actuación_inicio_hora: 

    

}


              




export const Expedientes: Expediente [] = [
    {
        id: '1252/2017',
        proceso: 'Drogas',
        numero: '1252/2017',
        instructor: '430',
        secretario: '410',
        ciudad: 'Elche (Alicante)',
        lugar: 'c/Mesalina',

        actuacion_fecha: new Date()

    }

];

