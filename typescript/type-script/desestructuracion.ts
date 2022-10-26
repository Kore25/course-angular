(function() {
    
    const avenger = {
        nombre: 'Steve',
        clave: 'Capitan America',
        poder: 'Droga',
    };

    const extraer = ({ nombre, clave }: any) => {
        // const { nombre, clave } = avenger;
        console.log(nombre);
        console.log(clave);
    }

    // extraer(avenger);

    const avengers: string[] = ['Thor', 'Ironman', 'Spiderman'];
    const [ , , spiderman ] = avengers;
    // console.log(thor);
    // console.log(ironman);
    console.log(spiderman);
    
})();



