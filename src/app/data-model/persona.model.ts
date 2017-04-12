export class Persona {
    id: string;
    es_hombre: boolean;
    apellidos_nombre: string;
    tipo_documento_id: string;
    numero_documento_id: string;
    fecha_nacim?: Date;
    lugar_nacim: string;
    nombre_padres: string;

    //domicilio
    domicilio_poblacion: string; //pais prov dom_pob
    domicilio_calle: string; //calle numero, piso, etc

    //contacto
    contacto_telef: string;
    contacto_email: string;

    //como conductor
    carne_clase: string; //AM, B, C1
    carne_numero: string; // = DNI
    carne_lug_exp: string;
    carne_exp_dsd?: Date;
    carne_exp_hst?: Date;

    //como ocupante
    //como peatón
    //como titular?

}

export const Personas: Persona [] = [

    {
        id: 'adfasdfa',
        es_hombre: true,
        apellidos_nombre: 'MARTÍNEZ CANALES, Juan',
        tipo_documento_id: 'Pasaporte',
        numero_documento_id: '54213365R',
        fecha_nacim: new Date(2017-12-12),
        lugar_nacim: 'Elche (Alicante)',
        nombre_padres: 'Juan y Marta',
        domicilio_poblacion: 'Elche (Alicante)',
        domicilio_calle: 'Juan de la Cierva, 32 5º',
        contacto_telef: '658 123 321',
        contacto_email: 'no@mail.com',
        carne_clase: 'B',
        carne_numero: 'DNI',
        carne_lug_exp: 'Alicante',
        carne_exp_dsd: new Date(2017-12-12),
        carne_exp_hst: new Date(2017-12-12)
    },
    {
        id: 'adfasdfadfadsf',
        es_hombre: true,
        apellidos_nombre: 'FUENTES SERRANO, Julián',
        tipo_documento_id: 'DNI',
        numero_documento_id: '53213365R',
       // fecha_nacim: Date(2017-12-12),
        lugar_nacim: 'Elche (Alicante)',
        nombre_padres: 'Juan y Marta',
        domicilio_poblacion: 'Elche (Alicante)',
        domicilio_calle: 'Martínez Cánovas, 32 5º',
        contacto_telef: '658 123 321',
        contacto_email: 'no@mail.com',
        carne_clase: 'B',
        carne_numero: 'DNI',
        carne_lug_exp: 'Alicante',
        //carne_exp_dsd: '2011-10-10',
        //carne_exp_hst: '2011-11-11'
    }
   

];
    