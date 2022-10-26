"use strict";
(function () {
    const miFuncion = function (a) {
        return a.toUpperCase();
    };
    const miFuncionF = (a) => a.toUpperCase();
    const sumar = function (a, b) {
        return a + b;
    };
    const sumarF = (a, b) => a + b;
    const hulk = {
        nombre: 'Hulk',
        smash() {
            // las funciones de flecha no modifica el objeto this.
            setTimeout(() => {
                console.log(`${this.nombre} smash!!`);
            }, 1000);
        }
    };
    hulk.smash();
})();
