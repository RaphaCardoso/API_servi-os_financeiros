const clienteService = require('../services/clienteService');

// const bcrypt = require('bcryptjs');

const clienteController = {

    create: async (req, res) => {
        try {
            const cliente = await clienteService.create(req.body);

            console.log(cliente.id);


            return res.status(201).json({
                code: "201",
                method: "POST",
                message: "Cliente criado com sucesso!",
                cliente: {
                    cliente
                },
                _links: {
                    self: {
                        href: `/cliente/${cliente.id}`,
                        method: "GET"
                    },
                    update: {
                        href: `/cliente/${cliente.id}`,
                        method: "PUT"
                    },
                    delete: {
                        href: `/cliente/${cliente.id}`,
                        method: "DELETE"
                    }

                }
            })

        } catch (error) {
            return res.status(500).json({
                code: "201",
                method: "POST",
                message: "Não foi possível criar Cliente!",
                error: error,
                cause: [
                    "Dados enviados incorretamente!"
                ]
            })
        }

    },

    getOne: async (req, res) => {

    },

    getAll: async (req, res) => {

    },

    update: async (req, res) => {

    },

    delete: async (req, res) => {

    },

    login: async (req, res) => {

    }


};

module.exports = clienteController;