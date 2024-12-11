const Cliente = require("../models/cliente");

const clienteService = {
    create: async (cliente) => {
        try {
            return await Cliente.create(cliente);
        } catch (error) {
            throw new Error(error);
        }
    },

}

module.exports = clienteService;