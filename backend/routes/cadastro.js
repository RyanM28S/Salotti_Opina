const express = require('express');

const roteador = express.Router()

function cadastrar(req,res){
    res.status(201).json({nome: "lucas"})
}

roteador.get("/cadastro", cadastrar)

export default roteador