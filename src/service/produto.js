import Produto from "../model/produto.js";

class ServiceProduto {
    async PegarTodos() {
        return Produto.findAll()
    }

    async PegarUm(id) {
        if (!id) {
            throw new Error("Favor informar um ID");
        }
        const produto = await Produto.findByPk(id)

        if (!produto) {
            throw new Error(`Produto ${id} não encontrado`);
            
        }

        return produto
    }

    async Criar(nome, disponivel, quantidade) {
        if (!nome || !disponivel || !quantidade) {
            throw new Error('Favor preencher todos os campos')
        }
        await Produto.create({
            nome, disponivel, quantidade
        })
     }

    async Alterar(id, nome, disponivel, quantidade) {

          if (!id) {
            throw new Error('Favor preencher todas as informaçoes')
        }

        const produtoVelho = await Produto.findByPk(id)

         if (!produtoVelho) {
            throw new Error(`Produto ${id} não encontrado`)
        }

        produtoVelho.nome = nome || produtoVelho.nome // se nao receber nada ele vai salvar o antigo
        produtoVelho.email = disponivel || produtoVelho.email
        produtoVelho.quantidade = quantidade || produtoVelho.quantidade

        return produtoVelho.save()
     }

    async Deletar(id) { 
        
        if (!id) {
            throw new Error("Favor informar um ID");
        }
        const produto = await Produto.findByPk(id)

        if (!produto) {
            throw new Error(`Produto ${id} não encontrado`);
            
        }

        return produto.destroy()
    }


}


export default new ServiceProduto()