import express from 'express'
import db from './db.js'

const roteador = express.Router();

async function Emensagem(req, res) {
    const {mensagem} = req.body;

    const [Cmensagem] = await db.query(
        "INSERT INTO mensagens(mensagem) VALUES(?)",
        [mensagem]
    )
    res.status(201).json({mensagem : "Tudo certo"});
}

roteador.post('/mensagem', Emensagem)

export default roteador