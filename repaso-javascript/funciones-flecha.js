/*function suma(a,b) {
    return a+b;
}
console.log(`Suma: ${suma(12,34)}`);*/

/*let suma = (a,b) => a+b;
console.log(`Suma: ${suma(12,34)}`);*/

// En las funciones de flecha el valor del "this" se ve modificado y apunta a un objeto exterior
// de nodejs llamado "global" este esta vacio asi que si se trata de usar dentro de una funcion flecha
// esta retornará undefined.
/*let videogame = {
    name: 'Borderlands 2',
    developer: '2K Games',
    year: 2015,
    rating: '9/10',
    toString: () => {
        return `Nombre: ${this.name}`;
    }
};
console.log(videogame.toString());*/

// Nos veremos obligados a usar la forma tradicional
let videogame = {
    name: 'Borderlands 2',
    developer: '2K Games',
    year: 2015,
    rating: '9/10',
    toString() {
        return `Nombre: ${this.name}`;
    }
};
console.log(videogame.toString());
