// setTimeout( () => console.log('Hola Mundo'), 2000);

let getUserById = (id, callback) => {
    let user = {
        name: 'Alice',
        id: id
    };

    if (id === 20) {
        callback(`No user exists with id: ${id}`)
    } else {
        callback(null, user);
    }
};

getUserById(2, (err, user) => {
    if (err) {
        return console.log(err);
    }
    console.log('Usuario:', user);
});
