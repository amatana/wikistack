const express = require("express");
const app = express();
const morgan = require("morgan");
const port = 3002;
const bodyParser = require("body-parser");
const nunjucks = require("nunjucks");
const models = require("./models/index.js");
const routes = require("./routes")


app.use(morgan("dev"));
app.use(express.static('./public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use("/",routes)


// apuntá nunjucks al directorio conteniendo templates y apagando el cacheo,
// configure devuelve una instancia Enviornment que vamos a querer usar para
// agregar Markdown después.
var env = nunjucks.configure('views', {noCache: true});
// hace res.render funcionar con archivos html
app.set('view engine', 'html');
// cuando res.render funciona con archivos html, haz que use nunjucks para eso.
app.engine('html', nunjucks.render);

// ! Sincronización con las tablas
models.db.sync({force:true})
.then(function () {
    return models.Page.sync({})
})
.then(function () {
    // asegurate de reemplazar el nombre de abajo con tu app de express
    app.listen(port, function () {
        console.log('Server is listening on port ' + port);
    });
})
.catch(console.error)


/*
//Conectar servidor

app.listen(port, function(){
	console.log("Listening on port " + port)
});*/