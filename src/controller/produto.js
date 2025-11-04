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

            res.status(200).send(
                "pegar um"
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

            await ServiceProduto.Criar(nome , disponivel, quantidade)

            res.status(200).send(
                "criando"
            )

        } catch (error) {
            res.status(500).send({ msg: error.menssage })
        }
    }

    async Alterar(req, res) {
        try {
            const id = req.params.id
            const { nome, disponivel, quantidade } = req.body

            await ServiceProduto.Alterar(nome , disponivel, quantidade)

            res.status(200).send(
                "alterando"
            )

        } catch (error) {
            res.status(500).send({ msg: error.menssage })
        }
    }

    async Deletar(req, res) {
        try {

            res.status(200).send(
                "deletando"
            )

        } catch (error) {
            res.status(500).send({ msg: error.menssage })
        }
    }

}

export default new ContollerProduto()