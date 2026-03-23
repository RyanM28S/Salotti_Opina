import express from "express"
import db from "./db.js"
import jwt from "jsonwebtoken"
import segredo from "./segredo.js"

const roteador = express.Router()

async function login(req, res) {
    const { email, senha } = req.body;

    const [encontrado] = await db.query(
        "SELECT * FROM usuarios WHERE email = ? AND senha = ?",
        [email, senha]
    );

    if (encontrado.length > 0) {

        const usuario = encontrado[0];

        const token = jwt.sign(
            { id: usuario.id, email: usuario.email, role: usuario.role },
            "segredo",
            { expiresIn: "1h" }
        )
        res.status(200).json({
            message: "login valido",
            token: token
        });
    } else {
        res.status(401).json({ message: "Usuario ou senha invalido" });
    }
}

async function cadastrar(req, res) {
    try {

        const { email, senha, nome } = req.body

        let cargo = "aluno";

        const [roles] = await db.query(
            "SELECT id FROM roles WHERE nome = ?",
            [cargo]
        )

        if(roles.length === 0) {
            return res.status(400).json({ message: "cargo invlido" })
        }

        const roleId = roles[0].id;

        const [resultado] = await db.query(
            "INSERT INTO usuarios(nome,email,senha,roles_id) VALUES(?,?,?,?)", 
            [nome, email, senha, roleId]
        )
        if (resultado.affectedRows > 0) {
            return res.status(201).json({ message: "Cadastrado com sucessso" })
        } else {
            return res.status(401).json({ message: "Erro ao cadastrar" })
        }
    } catch (erro) {
        console.error(erro)
        if (erro.code === "ER_DUP_ENTRY") {
            res.status(400).json({ message: "Email ou nome de usuario indisponivel" })
        }
    }
}

roteador.post("/login", login);
roteador.post("/cadastro", cadastrar)

export default roteador