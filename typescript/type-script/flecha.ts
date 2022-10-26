(function() {
    
    const miFuncion = function(a: string){
        return a.toUpperCase();
    }

    const miFuncionF = ( a: string ) => a.toUpperCase();
    
    const sumar = function(a: number, b: number){
        return a + b;
    }

    const sumarF = (a: number, b: number) => a + b;

    const hulk = {
        nombre: 'Hulk',
        smash() {
            // las funciones de flecha no modifica el objeto this.
            setTimeout(() => {
                console.log(`${this.nombre} smash!!`);
            }, 1000);
        }
    }
    
    hulk.smash();

})();



