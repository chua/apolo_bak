export class Vehiculo {
    id?: string; //reservado para sincro
    tipo: string;
    matricula: string;
    bastidor?: string;
    marca_modelo: string;
    color?: string;

    itv_hasta?: Date;
    soa_hasta?: Date;

    matriculacion_fecha?: Date;


    

}



              




export const Vehiculos: Vehiculo [] = [
    {tipo: 'turismo', matricula: '5241DBH', marca_modelo: 'Seat Ibiza' },
    {tipo: 'furgoneta', matricula: 'A5241DE', bastidor: 'FZZDFERTFDC89765', marca_modelo: 'Citroen Berlingo'}
];

