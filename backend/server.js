import express from 'express'
import cors from 'cors'
import rotaCadastro from "./routes/cadastro.js"
import rotaLogin from "./routes/login2.js"
import rotaMensagem from "./routes/mensagem.js"

const app = express();

app.use(cors());
app.use(express.json());

app.use(rotaCadastro);
app.use(rotaLogin);
app.use(rotaMensagem);

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000  ')
});