const express = require('express');
const mysql = require('mysql2');

const app = express();
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'meubanco'    
});     

app.get('/', (req, res) => {
    res.send('Servidor Funcionando');
});

app.use('/auth', roteador)

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000  ')
});