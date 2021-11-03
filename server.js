const express = require('express');
const mysql = require('mysql');
const myconn = require('express-myconnection');

const app = express();
const routes = require('./routes');
const dbOptions = {
    host: 'localhost',
    port: '3306',
    user: 'sqluser',
    password: '123456',
    database: 'library'
};

//middleware
app.use(myconn(mysql, dbOptions, 'single') );
app.use(express.json());

//configuración del puerto salida

//puedo usar mi puerto o el del hosting con la env
app.set('port', process.env.PORT || 9000);
app.listen(app.get('port'), () => {
    console.log('server is running on port', app.get('port'));
});

//ruta principal de la app
app.get('/', (req,res) => {
    res.send('bienvenido a mi api de conección')
});

//rutas
app.use('/api', routes);

