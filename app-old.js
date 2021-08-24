



const http = require('http');

http.createServer( (req, res) =>{




    res.write('Saludos');

    res.end();

})
.listen( 8080);

console.log("se escucha desde ", 8080);