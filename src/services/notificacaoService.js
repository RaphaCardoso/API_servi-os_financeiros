const Notificacao = require("../models/notificacoes");

const notificacaoService = {
    create: async (notificacao) => {
        try {
            return await Notificacao.create(notificacao);
        } catch (error) {
            throw new Error(error);
        }
    },

    getOne: async (id) => {
        try {

            const notificacao = await Notificacao.findByPk(id);

            if (!notificacao) {
                const error = { Error: "Erro! ID inválido, notificacao não encotrado!" };
                return error;
            }

            return notificacao;

        } catch (error) {
            console.error(error);
            throw new Error("Erro, notificacaote o suporte");
        }
    },

    getAll: async () => {
        try {

            return await Notificacao.findAll();

        } catch (error) {
            console.error(error);
            throw new Error("Erro, notificacaote o suporte");
        }
    },

    update: async (id, data) => {
        try {
            const notificacao = await Notificacao.findByPk(id);

            if (!notificacao) {
                const error = { Error: "Erro! ID inválido, notificacao não encotrado!" };
                return error;
            }

            return await notificacao.update(data);

        } catch (error) {
            console.error(error);
            throw new Error("Erro, notificacaote o suporte");
        }
    },

    delete: async (id) => {
        try {
            const notificacao = await Notificacao.findByPk(id);

            if (!notificacao) {
                const error = { Error: "Erro! ID inválido, notificacao não encotrado!" };
                return error;
            }

            return await notificacao.destroy();

        } catch (error) {
            console.error(error);
            throw new Error("Erro, notificacaote o suporte");
        }
    }

}

module.exports = notificacaoService;