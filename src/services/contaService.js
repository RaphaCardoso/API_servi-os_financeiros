const Conta = require("../models/conta");

const contaService = {
    create: async (conta) => {
        try {
            return await Conta.create(conta);
        } catch (error) {
            throw new Error(error);
        }
    },

    getOne: async (id) => {
        try {

            const conta = await Conta.findByPk(id);

            if (!conta) {
                const error = { Error: "Erro! ID inválido, conta não encotrado!" };
                return error;
            }

            return conta;

        } catch (error) {
            console.error(error);
            throw new Error("Erro, contate o suporte");
        }
    },

    getAll: async () => {
        try {

            return await Conta.findAll();

        } catch (error) {
            console.error(error);
            throw new Error("Erro, contate o suporte");
        }
    },

    update: async (id, data) => {
        try {
            const conta = await Conta.findByPk(id);

            if (!conta) {
                const error = { Error: "Erro! ID inválido, conta não encotrado!" };
                return error;
            }

            return await conta.update(data);

        } catch (error) {
            console.error(error);
            throw new Error("Erro, contate o suporte");
        }
    },

    delete: async (id) => {
        try {
            const conta = await Conta.findByPk(id);

            if (!conta) {
                const error = { Error: "Erro! ID inválido, conta não encotrado!" };
                return error;
            }

            return await conta.destroy();

        } catch (error) {
            console.error(error);
            throw new Error("Erro, contate o suporte");
        }
    }

}

module.exports = contaService;