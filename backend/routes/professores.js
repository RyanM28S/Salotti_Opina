import express from "express"
import db from "./db.js"

const router = express.Router()


async function contagem(req,res) {
    try {
        const resultado = await db.query("SELECT * FROM usuarios WHERE cargo = ?",["professor"])
        const inter = await resultado[0]
        const quant = inter.length
        res.status(200).json({quantidade: `${quant}`})
    } catch(erro) {
        res.status(404).json({mensagem: "Nenhum professor registrado"})        
    }
}

router.get("/professores", contagem)

export default router