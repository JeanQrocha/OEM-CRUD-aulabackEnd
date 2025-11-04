//configurar a conexao com banco
import { Sequelize } from "sequelize";

class BancoDados {
    constructor() {
        this.init()
    }

    init() {
        //colocar todos as configs com o banco
        this.db = new Sequelize({
            database: 'estoque', //nome do banco de dados
            host: 'localhost', //local que o servidor esta hosperdado
            username: 'root', //usuario do servidor
            password: '',   //senha do banco
            dialect: 'mysql' //o tipo do banco que vai ser ultilizado
        })
    }
}

export default new BancoDados()