const express = require('express');
const router = express.Router();
const { data } = require('../data/data.json');
const { projects } = data;

//Setting the routes
//An "index" route (/) to render the "Home" page 
router.get('/', (req, res) => {
    res.render('index', { projects });
});

// An "about" route (/about) to render the "About" page 
router.get('/about', (req, res) => {
    res.render('about');
});

//Dynamic "project" routes (/projects/:id) based on the id of the project 
//that render a customized version of the Pug project template to show off each project. 

router.get('/projects/:id', (req, res) => {
    const projectId = req.params.id;
    const project = projects.find( ({ id }) => id === +projectId );
    if (project) {
        res.render('project', { project });
    } 
     else {
        console.log('Page you\'re looking for doesn\'t exist');
        res.status(404).render('not-found');
     }
});

//Exporting router
module.exports = router;