const Cliente = require("../models/cliente");

const clienteService = {
    create: async (cliente) => {
        try {
            return await Cliente.create(cliente);
        } catch (error) {
            throw new Error(error);
        }
    },

    getOne: async (id) => {
        try {

            const cliente = await Cliente.findByPk(id);

            if (!cliente) {
                const error = { Error: "Erro! ID inválido, cliente não encotrado!" };
                return error;
            }

            return cliente;

        } catch (error) {
            console.error(error);
            throw new Error("Erro, contate o suporte");
        }
    },

    getAll: async () => {
        try {

            return await Cliente.findAll();

        } catch (error) {
            console.error(error);
            throw new Error("Erro, contate o suporte");
        }
    },

    update: async (id, data) => {
        try {
            const cliente = await Cliente.findByPk(id);

            if (!cliente) {
                const error = { Error: "Erro! ID inválido, cliente não encotrado!" };
                return error;
            }

            return await cliente.update(data);

        } catch (error) {
            console.error(error);
            throw new Error("Erro, contate o suporte");
        }
    },

    delete: async (id) => {
        try {
            const cliente = await Cliente.findByPk(id);

            if (!cliente) {
                const error = { Error: "Erro! ID inválido, cliente não encotrado!" };
                return error;
            }

            return await cliente.destroy();

        } catch (error) {
            console.error(error);
            throw new Error("Erro, contate o suporte");
        }
    }

}

module.exports = clienteService;