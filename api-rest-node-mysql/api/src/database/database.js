const database = require('mysql');
const connection = database.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'mysql',
    database: 'develop'
});

connection.connect((err) => {
    if (err) {
      console.log(err);
    } else {
        console.log(`Database connected successfully!`);
    }
});

module.exports = connection;