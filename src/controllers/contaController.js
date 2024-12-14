const contaService = require('../services/contaService');

// const bcrypt = require('bcryptjs');

const contaController = {

    create: async (req, res) => {
        try {

            const conta = await contaService.create(req.body);

            return res.status(201).json({
                code: "201",
                method: "POST",
                message: "conta criado com sucesso!",
                conta: {
                    conta
                },
                _links: {
                    self: {
                        href: `/conta/${conta.id}`,
                        method: "GET"
                    },
                    update: {
                        href: `/conta/${conta.id}`,
                        method: "PUT"
                    },
                    delete: {
                        href: `/conta/${conta.id}`,
                        method: "DELETE"
                    }

                }
            });

        } catch (error) {

            return res.status(500).json({
                code: "500",
                method: "POST",
                message: "Não foi possível criar conta!",
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

            const conta = await contaService.getOne(id);

            if (conta.Error) {
                return res.status(404).json({
                    code: "404",
                    method: "GET",
                    message: ["conta não foi encontrado!", conta, "Digite um ID válido!"],
                    _links: {
                        create: {
                            href: `/conta/`,
                            method: "POST"
                        },
                        update: {
                            href: `/conta/${conta.id}`,
                            method: "PUT"
                        },
                        delete: {
                            href: `/conta/${conta.id}`,
                            method: "DELETE"
                        }

                    }
                });
            };

            return res.status(201).json({
                code: "200",
                method: "GET",
                message: "conta encontrado com sucesso!",
                conta: {
                    conta
                },
                _links: {
                    create: {
                        href: `/conta/`,
                        method: "POST"
                    },
                    update: {
                        href: `/conta/${conta.id}`,
                        method: "PUT"
                    },
                    delete: {
                        href: `/conta/${conta.id}`,
                        method: "DELETE"
                    }

                }
            });

        } catch (error) {

            return res.status(500).json({
                code: "500",
                method: "GET",
                message: "Não foi possível encontrar conta!",
                error: error
            });

        }

    },

    getAll: async (req, res) => {
        try {

            const contas = await contaService.getAll();

            return res.status(201).json({
                code: "200",
                method: "GET",
                message: "contas encontrados com sucesso!",
                conta: {
                    contas
                },
                _links: {
                    create: {
                        href: `/conta/`,
                        method: "POST"
                    },
                    self: {
                        href: `/conta/:id`,
                        method: "GET"
                    },
                    update: {
                        href: `/conta/:id`,
                        method: "PUT"
                    },
                    delete: {
                        href: `/conta/:id`,
                        method: "DELETE"
                    }

                }
            });

        } catch (error) {

            return res.status(500).json({
                code: "500",
                method: "GET",
                message: "Não foi possível encotrar contas!",
                _links: {
                    create: {
                        href: `/conta/`,
                        method: "POST"
                    },
                    update: {
                        href: `/conta/${conta.id}`,
                        method: "PUT"
                    },
                    delete: {
                        href: `/conta/${conta.id}`,
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
                Nome_conta: req.body.Nome_conta,
                Email: req.body.Email
            }

            const conta = await contaService.update(id, data);

            if (conta.Error) {
                return res.status(404).json({
                    code: "404",
                    method: "PUT",
                    message: ["conta não foi encontrado!", conta, "Digite um ID válido!"],
                    _links: {
                        self: {
                            href: `/conta/${conta.id}`,
                            method: "GET"
                        },
                        create: {
                            href: `/conta/`,
                            method: "POST"
                        },
                        delete: {
                            href: `/conta/${conta.id}`,
                            method: "DELETE"
                        }

                    }
                });
            };

            return res.status(201).json({
                code: "200",
                method: "PUT",
                message: "conta atualizado com sucesso!",
                conta: {
                    conta
                },
                _links: {
                    self: {
                        href: `/conta/${conta.id}`,
                        method: "GET"
                    },
                    create: {
                        href: `/conta/`,
                        method: "POST"
                    },
                    delete: {
                        href: `/conta/${conta.id}`,
                        method: "DELETE"
                    }

                }
            });

        } catch (error) {
            return res.status(500).json({
                code: "500",
                method: "PUT",
                message: "Não foi possível encontrar conta!",
                error: error
            });

        }
    },

    delete: async (req, res) => {

        try {
            const { id } = req.params;

            const conta = await contaService.delete(id);

            if (conta.Error) {
                return res.status(404).json({
                    code: "404",
                    method: "DELETE",
                    message: ["conta não foi encontrado!", conta, "Digite um ID válido!"],
                    _links: {
                        self: {
                            href: `/conta/${conta.id}`,
                            method: "GET"
                        },
                        create: {
                            href: `/conta/`,
                            method: "POST"
                        },
                        update: {
                            href: `/conta/${conta.id}`,
                            method: "PUT"
                        }
                    }
                });
            };

            return res.status(201).json({
                code: "200",
                method: "DELETE",
                message: "conta deletado com sucesso!",
                conta: {
                    conta
                },
                _links: {
                    self: {
                        href: `/conta/${conta.id}`,
                        method: "GET"
                    },
                    create: {
                        href: `/conta/`,
                        method: "POST"
                    },
                    delete: {
                        href: `/conta/${conta.id}`,
                        method: "DELETE"
                    }

                }
            });


        } catch (error) {
            return res.status(500).json({
                code: "500",
                method: "DELETE",
                message: "Não foi possível encontrar conta!",
                error: error
            });
        }

    },

    login: async (req, res) => {

    }


};

module.exports = contaController;