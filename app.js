//Require Express
const express = require('express');

//Require data.json file
const { projects } = require('./data/data.json');
//const { recipes } = require('../data/data.json'); if no 'data' in data.json
//const { projects } = data;

//Optionally - Require the path module which can be used when setting the absolute path in the express.static function.

const app = express();

//use a static route and the express.static method to serve the static files located in the public folder
app.use('/static', express.static('public'));

//set your “view engine” to “pug” 
app.set('view engine', 'pug');

//Setting the routes
//An "index" route (/) to render the "Home" page with the locals set to data.projects 
app.get('/', (req, res) => {
    //res.locals = data.projects;
    res.render('index', { projects });
    //res.render('index');
});

// An "about" route (/about) to render the "About" page 
app.get('/about', (req, res) => {
    res.render('about');
});

//Dynamic "project" routes (/project/:id or /projects/:id) based on the id of the project 
//that render a customized version of the Pug project template to show off each project. 
//Which means adding data, or "locals", as an object that contains data to be passed 
//to the Pug template.

app.get('/projects/id:', (req, res) => {
    //const { id } = req.params;
    const projectsId = req.params.id;
    //const templateData = { id };
    const project = projects.find( ({ id }) => id === +projectsId );
    //res.render('project', {templateData});
    res.render('project', { project });
});

//Starting the server. 
app.listen(3000, () => {
    console.log('The app is running on localhost:3000');
});