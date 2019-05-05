/**
 * Servidor http con express
 */

const express = require('express');
const hbs = require('hbs');
const app = express();
require('./helpers/helpers.js');

const PORT = process.env.PORT || 3000;

// Provides static content allocated inside the public folder
app.use(express.static(__dirname+'/public'));
// Set the template engine
app.set('view engine', 'hbs');
// Register partial views
hbs.registerPartials(__dirname+'/views/partials');
// Set routes and render pages
app.get('/', (req, res) => {
   res.render('home', {
       name: 'miguel angel',
       title: 'Home'
   });
});

app.get('/about', (req, res) => {
   res.render('about', {
       title: 'About'
   })
});


// Set the listening port
app.listen(PORT, () => console.log(`Listening in port ${PORT}`));
