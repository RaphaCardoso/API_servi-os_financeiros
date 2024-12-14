const Transacao = require("../models/transacoes");

const transacaoService = {
    create: async (transacao) => {
        try {
            return await Transacao.create(transacao);
        } catch (error) {
            throw new Error(error);
        }
    },

    getOne: async (id) => {
        try {

            const transacao = await Transacao.findByPk(id);

            if (!transacao) {
                const error = { Error: "Erro! ID inválido, transacao não encotrado!" };
                return error;
            }

            return transacao;

        } catch (error) {
            console.error(error);
            throw new Error("Erro, transacaote o suporte");
        }
    },

    getAll: async () => {
        try {

            return await Transacao.findAll();

        } catch (error) {
            console.error(error);
            throw new Error("Erro, transacaote o suporte");
        }
    },

    update: async (id, data) => {
        try {
            const transacao = await Transacao.findByPk(id);

            if (!transacao) {
                const error = { Error: "Erro! ID inválido, transacao não encotrado!" };
                return error;
            }

            return await transacao.update(data);

        } catch (error) {
            console.error(error);
            throw new Error("Erro, transacaote o suporte");
        }
    },

    delete: async (id) => {
        try {
            const transacao = await Transacao.findByPk(id);

            if (!transacao) {
                const error = { Error: "Erro! ID inválido, transacao não encotrado!" };
                return error;
            }

            return await transacao.destroy();

        } catch (error) {
            console.error(error);
            throw new Error("Erro, transacaote o suporte");
        }
    }

}

module.exports = transacaoService;