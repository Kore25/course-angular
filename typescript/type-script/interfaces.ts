(function() {
    
    interface Xmen {
        nombre: string;
        edad: number;
        poder?: string;
    }

    const enviarMision = ( xmen: Xmen ) => {
        console.log(`Enviando a ${ xmen.nombre } a la misión`);   
    }

    const regresarAlCuartel = (xmen: Xmen ) => {
        console.log(`Regresando a ${ xmen.nombre } d la misión`);   
    }

    const wolverine: Xmen = {
        nombre: 'logan',
        edad: 50
    }

    enviarMision( wolverine );
    regresarAlCuartel( wolverine );
    

})();



