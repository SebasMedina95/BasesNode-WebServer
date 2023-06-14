require('dotenv').config();
const express = require('express');
const path = require("path"); //Para no tener problemas con el index
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Ejecutamos Middleware para servir contenido estático
app.use( express.static('public') );

//path.join nos ayuda gestionar el index como tal, y también mejoró el rendimiento de la landingpase
// app.get('/',  (req, res) => {
//     res.sendFile(path.join(__dirname + '/public/index.html'));
// });
app.get('/',  (req, res) => {
    res.render('home' , {
        nombre  : 'Sebastian Medina',
        titulo  : 'Mi Curso de Node JS',
        central : 'Aprendiendo Node' 
    });
});

app.get('/home',  (req, res) => {
    // res.sendFile(path.join(__dirname + '/public/index.html'));
    res.render('home' , {
        nombre  : 'Sebastian Medina',
        titulo  : 'Mi Curso de Node JS',
        central : 'Aprendiendo Node' 
    });
});

app.get('/generic',  (req, res) => {
    // res.sendFile(path.join(__dirname + '/public/generic.html'));
    res.render('generic' , {
        nombre  : 'Juan Sebastian Medina Toro',
        titulo  : 'Mi Curso de Node JS',
        fecha   : '14 Junio de 2023',
        central : 'Aprendiendo Node' 
    });
});

app.get('/elements',  (req, res) => {
    // res.sendFile(path.join(__dirname + '/public/elements.html'));
    res.render('elements' , {
        nombre  : 'Juan Sebastian Medina Toro',
        titulo  : 'Mi Curso de Node JS',
        fecha   : '14 Junio de 2023',
        central : 'Aprendiendo Node' 
    });
});



app.listen(port, () => {
console.log(`La aplicación ejemplo está corriendo por el puerto ${port}`)
})