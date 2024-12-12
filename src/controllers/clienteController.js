const clienteService = require('../services/clienteService');

// const bcrypt = require('bcryptjs');

const clienteController = {

    create: async (req, res) => {
        try {

            const cliente = await clienteService.create(req.body);

            console.log(cliente + " certo!");

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
            });

        } catch (error) {

            return res.status(500).json({
                code: "500",
                method: "POST",
                message: "Não foi possível criar Cliente!",
                error: error,
                cause: [
                    "Dados enviados incorretamente!"
                ]
            });

        }

    },

    getOne: async (req, res) => {
        try {

            const { id } = req.params;

            const cliente = await clienteService.getOne(id);

            if (cliente.Error) {
                return res.status(404).json({
                    code: "404",
                    method: "GET",
                    message: ["Cliente não foi encontrado!", cliente, "Digite um ID válido!"],
                    _links: {
                        create: {
                            href: `/cliente/`,
                            method: "POST"
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
                });
            };

            return res.status(201).json({
                code: "200",
                method: "GET",
                message: "Cliente encontrado com sucesso!",
                cliente: {
                    cliente
                },
                _links: {
                    create: {
                        href: `/cliente/`,
                        method: "POST"
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
            });

        } catch (error) {

            return res.status(500).json({
                code: "500",
                method: "GET",
                message: "Não foi possível encontrar Cliente!",
                error: error
            });

        }

    },

    getAll: async (req, res) => {
        try {

            const clientes = await clienteService.getAll();

            return res.status(201).json({
                code: "200",
                method: "GET",
                message: "Clientes encontrados com sucesso!",
                cliente: {
                    clientes
                },
                _links: {
                    create: {
                        href: `/cliente/`,
                        method: "POST"
                    },
                    self: {
                        href: `/cliente/:id`,
                        method: "GET"
                    },
                    update: {
                        href: `/cliente/:id`,
                        method: "PUT"
                    },
                    delete: {
                        href: `/cliente/:id`,
                        method: "DELETE"
                    }

                }
            });

        } catch (error) {

            return res.status(500).json({
                code: "500",
                method: "GET",
                message: "Não foi possível encotrar clientes!",
                _links: {
                    create: {
                        href: `/cliente/`,
                        method: "POST"
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
            });
        }
    },

    update: async (req, res) => {

        try {

            const { id } = req.params;
            const data = {
                Nome_Cliente: req.body.Nome_Cliente,
                Email: req.body.Email
            }

            const cliente = await clienteService.update(id, data);

            if (cliente.Error) {
                return res.status(404).json({
                    code: "404",
                    method: "PUT",
                    message: ["Cliente não foi encontrado!", cliente, "Digite um ID válido!"],
                    _links: {
                        self: {
                            href: `/cliente/${cliente.id}`,
                            method: "GET"
                        },
                        create: {
                            href: `/cliente/`,
                            method: "POST"
                        },
                        delete: {
                            href: `/cliente/${cliente.id}`,
                            method: "DELETE"
                        }

                    }
                });
            };

            return res.status(201).json({
                code: "200",
                method: "PUT",
                message: "Cliente atualizado com sucesso!",
                cliente: {
                    cliente
                },
                _links: {
                    self: {
                        href: `/cliente/${cliente.id}`,
                        method: "GET"
                    },
                    create: {
                        href: `/cliente/`,
                        method: "POST"
                    },
                    delete: {
                        href: `/cliente/${cliente.id}`,
                        method: "DELETE"
                    }

                }
            });

        } catch (error) {
            return res.status(500).json({
                code: "500",
                method: "PUT",
                message: "Não foi possível encontrar Cliente!",
                error: error
            });

        }
    },

    delete: async (req, res) => {

        try {
            const { id } = req.params;

            const cliente = await clienteService.delete(id);

            if (cliente.Error) {
                return res.status(404).json({
                    code: "404",
                    method: "DELETE",
                    message: ["Cliente não foi encontrado!", cliente, "Digite um ID válido!"],
                    _links: {
                        self: {
                            href: `/cliente/${cliente.id}`,
                            method: "GET"
                        },
                        create: {
                            href: `/cliente/`,
                            method: "POST"
                        },
                        update: {
                            href: `/cliente/${cliente.id}`,
                            method: "PUT"
                        }
                    }
                });
            };

            return res.status(201).json({
                code: "200",
                method: "DELETE",
                message: "Cliente deletado com sucesso!",
                cliente: {
                    cliente
                },
                _links: {
                    self: {
                        href: `/cliente/${cliente.id}`,
                        method: "GET"
                    },
                    create: {
                        href: `/cliente/`,
                        method: "POST"
                    },
                    delete: {
                        href: `/cliente/${cliente.id}`,
                        method: "DELETE"
                    }

                }
            });


        } catch (error) {
            return res.status(500).json({
                code: "500",
                method: "DELETE",
                message: "Não foi possível encontrar Cliente!",
                error: error
            });
        }

    },

    login: async (req, res) => {

    }


};

module.exports = clienteController;