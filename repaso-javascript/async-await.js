/**
 * Async Await
 * El operador await es usado para esperar a una Promise. Sólo puede ser usado dentro de una función async function.
 * La expresión await provoca que la ejecución de una función async sea pausada hasta que una Promise sea terminada o
 * rechazada, y regresa a la ejecución de la función async después del término. Al regreso de la ejecución, el valor
 * de la expresión await es la regresada por una promesa terminada.
 *
 * Si la Promise es rechazada, el valor de la expresión await tendrá el valor de rechazo.
 * Si el valor de la expresión seguida del operador await  no es una promesa, será convertido a una resolved Promise.
 */

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

let findEmployeeById = async (id) => {
    let employee = employes.find(emp => emp.id === id);
    if (!employee) {
        throw new Error(`Employee with id: ${id} not found`);
    } else {
        return employee;
    }
};

let obtainSalary = async (employee) => {
    if (!employee.salary) {
        throw new Error(`Can't obtain salary from employee: ${employee.name}`);
    } else {
        let {name, salary} = employee;
        return `Name: ${name} - Salary: ${salary}`
    }
};

let obtainData = async (id) => {
    let employee = await findEmployeeById(id);
    return await obtainSalary(employee);
};

obtainData(10)
    .then(data => console.log(data))
    .catch(err => console.log(err));
