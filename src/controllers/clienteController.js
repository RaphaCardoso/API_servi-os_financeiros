const clienteService = require('../services/clienteService');

const bcrypt = require('bcryptjs');

const clienteController = {

    create: async (req, res) => {
        try {
            const cliente = await clienteService.create(req)

            return res.status(201).json({
                code: "201",
                method: "POST",
                message: "Cliente criado com sucesso!",
                cliente: {
                    cliente
                },
                _links: {
                    self: {
                        href: `/cliente/${cliente._id}`,
                        method: "GET"
                    },
                    update: {
                        href: `/cliente/${cliente._id}`,
                        method: "PUT"
                    }

                }
            })

        } catch (error) {
            
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