import express from "express"
import mysql from 'mysql2'

const roteador = express.Router()

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'app_db'    
});     

function cadastrar(req,res){
    const query = db.query("INSERT INTO usuarios(nome) VALUES (?)", [req.body.nome])
    res.status(201).json({state: "ok"})
}

roteador.post("/cadastro", cadastrar)

export default roteador