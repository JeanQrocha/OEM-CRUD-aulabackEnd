import Produto from "../model/produto.js";

class ServiceProduto {
    async PegarTodos() {
        return Produto.findAll()
    }

    async PegarUm() { }

    async Criar(nome, disponivel, quantidade) {
        await Produto.create({
            nome, disponivel, quantidade
        })
     }

    async Alterar(id, nome, disponivel, quantidade) {

        const produto = await produto.findBypkid

        produto.nome = nome
        produto.email = disponivel
        produto.quantidade = quantidade

        return user.save()
     }

    async Deletar() { }


}


export default new ServiceProduto()