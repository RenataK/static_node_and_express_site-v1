let port = process.env.PORT || 3000;

//Require Express
const express = require('express');

const app = express();

//using a static route and the express.static method to serve the static files located in the public folder
app.use('/static', express.static('public'));

//setting “view engine” to “pug” 
app.set('view engine', 'pug');

/* Importing route definitions */
const projectRouter = require('./routes/index');

/* Using route definitions */
app.use('/', projectRouter);

/* ERROR HANDLERS */
/* 404 handler to catch undefined or non-existent route requests */
app.use((req, res, next) => {
    console.log('404 error handler called');
    res.status(404).render('not-found');
  });

//Starting the server. 
app.listen(port, () => {
    console.log('The app is running on localhost:3000');
});