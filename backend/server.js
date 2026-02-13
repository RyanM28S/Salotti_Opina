import express from 'express'
import roteador from "./routes/cadastro.js"

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Servidor Funcionando');
});

app.use("/", roteador)

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000  ')
});