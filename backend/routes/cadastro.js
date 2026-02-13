import express from "express"
import db from "./db.js"

const roteador = express.Router()

async function cadastrar(req,res){
    const [query] = await db.query("INSERT INTO usuarios(nome, senha) VALUES (?,?)", [req.body.nome, req.body.senha])
    res.status(201).json(query)
}

roteador.post("/cadastro", cadastrar)

export default roteador