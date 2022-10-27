(function() {
    

    const sumar = (a: number, b: number): number => a + b;

    const nombre = (): string => 'Hola luis';

    const obtenerSalario = ():Promise<string> => {
        return new Promise((resolve, reject) => {
            resolve('Luis');
        });
    }

    obtenerSalario().then(a => console.log( a.toUpperCase() ));
    

})();



