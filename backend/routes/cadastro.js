import express from "express"
import db from "./db.js"

const roteador = express.Router()

async function cadastrar(req, res) {

    const [procurar] = await db.query(
        "SELECT * FROM usuarios WHERE email = ?",
        [req.body.email]
    )
    if (procurar.length > 0) {
        res.status(409).json({ mensagem: "Conflito"});
        return;
    } else {
        const [criando] = await db.query(
            "INSERT INTO usuarios(nome, senha, email) VALUES (?,?,?)",
            [req.body.nome, req.body.senha, req.body.email]
        )
        res.status(201).json(criando)
    }


}

roteador.post("/cadastro", cadastrar)

export default roteador