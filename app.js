const express = require('express');
const hbs = require('hbs');
require('dotenv').config();
const app = express();
const port = process.env.PORT;


app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');



//Middleware para servir contenido estatico
app.use(express.static('public') );

app.get('/', function (req, res) {
    res.render('home',{
        nombre: 'Elneto',
        titulo: 'Ejemplo node'
    });
});


app.get('/generic', function (req, res) {
    res.render('generic',{
        nombre: 'Elneto',
        titulo: 'Ejemplo node'
    });
});

app.get('/elements', function (req, res) {
    res.render('elements',{
        nombre: 'Elneto',
        titulo: 'Ejemplo node'
    });
});



app.get('*', function (req, res) {
    res.sendFile(__dirname +'/public/404.html');
});
 
app.listen(port, () =>{
    console.log(` Ejemplo usando un lista con port variable en ${port}`);
})