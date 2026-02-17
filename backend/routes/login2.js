import express from "express"
import db from "./db.js"

const roteador = express.Router()

async function login(req,res){
    const { nome, senha } = req.body;

    const [rows] = await db.query(
        "SELECT * FROM usuarios WHERE nome = ? AND senha = ?",
        [nome, senha]
    );

    if (rows.length > 0) {
        res.status(200).json({ mensagem: "login valido" });
    } else {
        res.status(401).json({ mensagem: "Usuario ou senha invalido" });
    }
}
roteador.post("/login", login);

export default roteador