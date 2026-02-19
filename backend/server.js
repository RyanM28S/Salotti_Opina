import express from 'express'
import cors from 'cors'
import cadastroRoteador from "./routes/cadastro.js"
import loginRoteador from "./routes/login2.js"

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", cadastroRoteador);
app.use("/", loginRoteador);

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000  ')
});