const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const rutasSobreMi = require("./routes/sobre_mi");
const main = require("./routes/main");


app.use(bodyParser.urlencoded({extended: false}));

//Middleware
app.use((request, response, next) => {
    console.log('¡Ya no tengo que reiniciar el servidor!');
    console.log(request.url);
    next();
});

app.use('/main', main);
app.use('/sobre_mi', rutasSobreMi);


app.get('/', (request, response, next) => {
    write = "";

    write += "<html>";
    write += '<head><title>Servidor node</title><meta charset="UTF-8">';
    write += '<meta name="viewport" content="width=device-width, initial-scale=1.0"></head>';
    write += "<body>";
    write += "<header><h1>Laboratorio 11</h1>";
    write += "Nombre: Andrea Piñeiro Cavazos <br/>";
    write += "Matrícula: A01705681 <br/>";
    write += "Correo Institucional: A01705681@itesm.mx</header>";

    write += "<h1>Describe el archivo package.json.</h1>"
    write += "Los paquetes npm contienen un archivo llamado 'package.json', que contiene metadata (proveen información acerca de uno o más aspectos de datos). <br>";
    write += "Este documento provee información a npm que le permite identificar el proyecto, con datos como: <ul>";
    write += "<li>nombre</li>";
    write += "<li>versión</li>";
    write += "<li>descripción</li>";
    write += "<li>autor</li>";
    write += "<li>licencia</li></ul>";
    write += "Y también le permite manejar las dependencias del proyecto. Para este proyecto, usé las siguientes dependencias: <ul>";
    write += "<li><strong>express:</strong> framework diseñado para construir y organizar aplicaciones.</li>";
    write += "<li><strong>nodemon:</strong> herramienta que corre automáticamente la aplicación de node cuando cambia el archivo.</li>";
    write += "<li><strong>body-parser:</strong> crea middlewares con la propiedad de 'req.body' con el cuerpo de Content-Type analizado. </li><br>";
    write += "</ul>";

    write += "<h2> Menú: </h2>";
    write += "<ul>";
    write += '<li><strong>Principal: </strong> <a href= "/main"> http://localhost:3000/main </a> </li>';
    write += '<li><strong>Arte: </strong> <a href= "/sobre_mi/Arte"> http://localhost:3000/sobre_mi/Arte </a> </li>';
    write += '<li><strong>Aprender: </strong> <a href= "/sobre_mi/Aprender"> http://localhost:3000/sobre_mi/Aprender </a> </li>';
    write += '<li><strong>Pasatiempos: </strong> <a href= "/sobre_mi/Pasatiempos"> http://localhost:3000/sobre_mi/Pasatiempos </a> </li>';
    write += '<li><strong>Usuarios: </strong> <a href= "/main/Usuarios"> http://localhost:3000/main/Usuarios </a> </li>';
    write += '</ul><br>';


    write += "<br><footer>";
    write += "<strong>Bibliografía:</strong><br>";
    write += "<ul>";
    write += "<li>Node. (S,F). The package.json guide. NodeJS. Consultado de ";
    write += '<a target = "_blank" href= "https://nodejs.dev/learn/the-package-json-guide"> https://nodejs.dev/learn/the-package-json-guide </a>';
    write += "el 28 de febrero de 2021.</li></ul>";

    write += "<strong>Editor de HTLM:</strong> VisualStudio Code <br/>";
    write += '<strong>URL: </strong> <a target = "_blank" href= "https://code.visualstudio.com/"> https://code.visualstudio.com/ </a>';
    write += "</footer>";
    
    write += "</body>";
    write += "</html>";

    response.send(write);
});


app.use( (request, response, next) => {
    //console.log(request.url);
    response.status(404);
    //response.statusCode = 404;
    //response.status(404).send('<h1>Page not found.</h1>');
    response.send('<h1>Page not found.</h1>'); 
});


app.listen(3000);