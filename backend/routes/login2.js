import express from "express"
import db from "./db.js"
import jwt from "jsonwebtoken"


const roteador = express.Router()

async function login(req,res){
    const { nome, senha } = req.body;

    const [encontrado] = await db.query(
        "SELECT * FROM usuarios WHERE nome = ? AND senha = ?",
        [nome, senha]
    );

    if (encontrado.length > 0) {

        const usuario = encontrado[0];

        const token = jwt.sign(
            {id: usuario.id},
            "",
            {expiresIn: "1h"}
        )
        res.status(200).json({ 
            mensagem: "login valido",
            token: token
        });
    } else {
        res.status(401).json({ mensagem: "Usuario ou senha invalido" });
    }
}
roteador.post("/login", login);

export default roteador