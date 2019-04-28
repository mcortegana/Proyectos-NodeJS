let videogame = {
    name: 'Borderlands 2',
    developer: '2K Games',
    year: 2015,
    rating: '9/10'
};

// destructuración de objetos permite asociar los atributos de un objeto con variables directamente
// de la siguiente forma:
let {name,developer,year} = videogame;
console.log(name, developer, year);

//Podemos asignarles otro nombre de variable de la siguiente forma
let {name: nombre, developer: desarrolladora, year: anio} = videogame;
console.log(nombre, desarrolladora, anio);
