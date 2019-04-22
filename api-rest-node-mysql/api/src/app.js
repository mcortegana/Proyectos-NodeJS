const express = require('express');
const app = express();
const employees = require('./routes/employeesRoutes');

// Settings
// process.env.PORT detecta el puerto por defecto que puede asignar el SO si no hay una especificado
// cogerá el puerto 3000.
app.set('port', process.env.PORT || 3000);

// Middleware
app.use(express.json());

// Routes
app.use(employees);

app.listen(app.get('port'), () => {
    console.log(`Express server listen in port ${app.get('port')}`);
});
