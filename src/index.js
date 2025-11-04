//index chama o router
import express from 'express'
import BancoDados from "./config/database.js"
import router from './router/produto.js'

const app = express();
app.use(express.json())
app.use('/api/v1', router)

const port = 3000

BancoDados.db
    .sync({ force: false })
    .then(() => {
        app.listen(port, () => {
            console.info('Servidor rodando na porta ' + port)
        });
    })
    .catch((e) => {
        console.log("Não foi possivel conectar com o banco: " + e)
    })

