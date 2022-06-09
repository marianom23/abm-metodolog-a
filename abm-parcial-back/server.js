const express = require('express');
const mysql = require('mysql2');
const myconn = require('express-myconnection')
const cors = require('cors')

const routes = require('./routes')

const app = express();
app.set('port', process.env.PORT || 9000);
const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1234',
    database: 'library'
}

//Middlewares---------------------------------------------------
app.use(myconn(mysql, dbOptions, 'single'));
app.use(express.json())
app.use(cors())
//Routes--------------------------------------------------------
app.get('/', (req, res) =>{
    res.send('Bienvenido a mi api')
})

app.use('/api', routes)


//Server running------------------------------------------------
app.listen(app.get('port'),()=>{
    console.log('Servidor corriendo en puerto:', app.get('port'))
})
