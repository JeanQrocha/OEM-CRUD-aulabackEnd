//controller chama o model

import ServiceProduto from "../service/produto.js"


class ContollerProduto {

    async PegarTodos(req, res) {
        try {
            const produtos = await ServiceProduto.PegarTodos()
            res.status(200).send(
                { data: produtos }
            )

        } catch (error) {
            res.status(500).send({ msg: error.menssage })
        }
    }

    async PegarUm(req, res) {
        try {

            // const {id} = req.params
            // const {id} = req.bory

            // const params = req.params
            // params.id
            const id = req.params.id

            const produto = await ServiceProduto.PegarUm(id)

            res.status(200).send(
                { data: produto }
            )
        } catch (error) {
            res.status(500).send({ msg: error.menssage })
        }
    }

    async Criar(req, res) {
        try {
            // const nome = req.body.nome
            // const disponivel = req.body.disponivel
            // const quantidade = req.body.quantidade

            const { nome, disponivel, quantidade } = req.body

            await ServiceProduto.Criar(nome, disponivel, quantidade)

            res.status(200).send({msg: "criado com sucesso"})

        } catch (error) {
            res.status(500).send({ msg: error.menssage })
        }
    }

    async Alterar(req, res) {
        try {
            const id = req.params.id
            // const { nome, disponivel, quantidade } = req.body

            const nome = req.body?.nome // ? se nao tiver nada ele vai colocar undefined
            const disponivel = req.body?.disponivel
            const quantidade = req.body?.quantidade

            await ServiceProduto.Alterar(id, nome, disponivel, quantidade)

            res.status(200).send(
                {msg:"alterado com sucesso"}
            )

        } catch (error) {
            res.status(500).send({ msg: error.menssage })
        }
    }

    async Deletar(req, res) {
        try {
            const id = req.params.id

            const produto = await ServiceProduto.Deletar(id)

            res.status(204).send(
                { data: produto }
            )

        } catch (error) {
            res.status(500).send({ msg: error.menssage })
        }
    }

}

export default new ContollerProduto()