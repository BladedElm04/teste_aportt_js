import express, {json} from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(json({limit: "50mb"}));

let dados = []; // Array para armazenar os dados

// Rota para salvar dados
app.post('/api/dados', (req, res) => {
    const { ip, date, latitude, longitude, photo } = req.body;
    const novoDado = { ip, date, latitude, longitude, photo };
    dados.push(novoDado);
    res.status(201).json(novoDado);
});

// Rota para obter os dados
app.get('/api/dados', (req, res) => {
    res.json(dados);
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
