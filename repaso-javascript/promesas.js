// Una Promise (Promesa) es un objeto que representa la terminación o el
// fracaso eventual de una operación asíncrona.
// NOTA: En el "resolve" de una promesa solo se puede devolver un parámetro,
// si se desea retornar más de un parametro se debe devolcer un objeto.

const employes = [
    {
        id: 1,
        name: 'Alice',
        salary: 3000
    },
    {
        id: 2,
        name: 'Bob',
        salary: 3000
    },
    {
        id: 3,
        name: 'Jhon',
        salary: 3000
    },
    {
        id: 4,
        name: 'Dunk'
    }
];

let findEmployeeById = (id) => {
    return new Promise((resolve, reject) => {

        let employee = employes.find(emp => emp.id === id);
        if (!employee) {
            reject(`Employee with id: ${id} not found`);
        } else {
            resolve(employee);
        }

    });
};

let obtainSalary = (employee) => {
    return new Promise((resolve, reject) => {
        if (!employee.salary) {
           reject(`Can't obtain salary from employee: ${employee.name}`);
        } else {
            let {name, salary} = employee;
            resolve(`Name: ${name} - Salary: ${salary}`);
        }
    });
};

/*findEmployeeById(4)
    .then(
        employee => console.log('Employee: ', employee),
        err => console.log(err));*/

/*findEmployeeById(4)
    .then(employee => {
        console.log(employee);
        obtainSalary(employee)
            .then(data => console.log(data))
            .catch(err => console.log(err))
    })
    .catch(err => console.log(err));*/

// Promesas encadenadas:
findEmployeeById(3)
    .then(employee => obtainSalary(employee))
    .then(data => console.log(data))
    .catch(err => console.log(err));
