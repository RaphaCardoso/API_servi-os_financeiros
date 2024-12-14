const notificacaoService = require('../services/notificacaoService');

// const bcrypt = require('bcryptjs');

const notificacaoController = {

    create: async (req, res) => {
        try {

            const notificacao = await notificacaoService.create(req.body);

            return res.status(201).json({
                code: "201",
                method: "POST",
                message: "notificacao criado com sucesso!",
                notificacao: {
                    notificacao
                },
                _links: {
                    self: {
                        href: `/notificacao/${notificacao.id}`,
                        method: "GET"
                    },
                    update: {
                        href: `/notificacao/${notificacao.id}`,
                        method: "PUT"
                    },
                    delete: {
                        href: `/notificacao/${notificacao.id}`,
                        method: "DELETE"
                    }

                }
            });

        } catch (error) {

            return res.status(500).json({
                code: "500",
                method: "POST",
                message: "Não foi possível criar notificacao!",
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

            const notificacao = await notificacaoService.getOne(id);

            if (notificacao.Error) {
                return res.status(404).json({
                    code: "404",
                    method: "GET",
                    message: ["notificacao não foi encontrado!", notificacao, "Digite um ID válido!"],
                    _links: {
                        create: {
                            href: `/notificacao/`,
                            method: "POST"
                        },
                        update: {
                            href: `/notificacao/${notificacao.id}`,
                            method: "PUT"
                        },
                        delete: {
                            href: `/notificacao/${notificacao.id}`,
                            method: "DELETE"
                        }

                    }
                });
            };

            return res.status(201).json({
                code: "200",
                method: "GET",
                message: "notificacao encontrado com sucesso!",
                notificacao: {
                    notificacao
                },
                _links: {
                    create: {
                        href: `/notificacao/`,
                        method: "POST"
                    },
                    update: {
                        href: `/notificacao/${notificacao.id}`,
                        method: "PUT"
                    },
                    delete: {
                        href: `/notificacao/${notificacao.id}`,
                        method: "DELETE"
                    }

                }
            });

        } catch (error) {

            return res.status(500).json({
                code: "500",
                method: "GET",
                message: "Não foi possível encontrar notificacao!",
                error: error
            });

        }

    },

    getAll: async (req, res) => {
        try {

            const notificacaos = await notificacaoService.getAll();

            return res.status(201).json({
                code: "200",
                method: "GET",
                message: "notificacaos encontrados com sucesso!",
                notificacao: {
                    notificacaos
                },
                _links: {
                    create: {
                        href: `/notificacao/`,
                        method: "POST"
                    },
                    self: {
                        href: `/notificacao/:id`,
                        method: "GET"
                    },
                    update: {
                        href: `/notificacao/:id`,
                        method: "PUT"
                    },
                    delete: {
                        href: `/notificacao/:id`,
                        method: "DELETE"
                    }

                }
            });

        } catch (error) {

            return res.status(500).json({
                code: "500",
                method: "GET",
                message: "Não foi possível encotrar notificacaos!",
                _links: {
                    create: {
                        href: `/notificacao/`,
                        method: "POST"
                    },
                    update: {
                        href: `/notificacao/${notificacao.id}`,
                        method: "PUT"
                    },
                    delete: {
                        href: `/notificacao/${notificacao.id}`,
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
                Nome_notificacao: req.body.Nome_notificacao,
                Email: req.body.Email
            }

            const notificacao = await notificacaoService.update(id, data);

            if (notificacao.Error) {
                return res.status(404).json({
                    code: "404",
                    method: "PUT",
                    message: ["notificacao não foi encontrado!", notificacao, "Digite um ID válido!"],
                    _links: {
                        self: {
                            href: `/notificacao/${notificacao.id}`,
                            method: "GET"
                        },
                        create: {
                            href: `/notificacao/`,
                            method: "POST"
                        },
                        delete: {
                            href: `/notificacao/${notificacao.id}`,
                            method: "DELETE"
                        }

                    }
                });
            };

            return res.status(201).json({
                code: "200",
                method: "PUT",
                message: "notificacao atualizado com sucesso!",
                notificacao: {
                    notificacao
                },
                _links: {
                    self: {
                        href: `/notificacao/${notificacao.id}`,
                        method: "GET"
                    },
                    create: {
                        href: `/notificacao/`,
                        method: "POST"
                    },
                    delete: {
                        href: `/notificacao/${notificacao.id}`,
                        method: "DELETE"
                    }

                }
            });

        } catch (error) {
            return res.status(500).json({
                code: "500",
                method: "PUT",
                message: "Não foi possível encontrar notificacao!",
                error: error
            });

        }
    },

    delete: async (req, res) => {

        try {
            const { id } = req.params;

            const notificacao = await notificacaoService.delete(id);

            if (notificacao.Error) {
                return res.status(404).json({
                    code: "404",
                    method: "DELETE",
                    message: ["notificacao não foi encontrado!", notificacao, "Digite um ID válido!"],
                    _links: {
                        self: {
                            href: `/notificacao/${notificacao.id}`,
                            method: "GET"
                        },
                        create: {
                            href: `/notificacao/`,
                            method: "POST"
                        },
                        update: {
                            href: `/notificacao/${notificacao.id}`,
                            method: "PUT"
                        }
                    }
                });
            };

            return res.status(201).json({
                code: "200",
                method: "DELETE",
                message: "notificacao deletado com sucesso!",
                notificacao: {
                    notificacao
                },
                _links: {
                    self: {
                        href: `/notificacao/${notificacao.id}`,
                        method: "GET"
                    },
                    create: {
                        href: `/notificacao/`,
                        method: "POST"
                    },
                    delete: {
                        href: `/notificacao/${notificacao.id}`,
                        method: "DELETE"
                    }

                }
            });


        } catch (error) {
            return res.status(500).json({
                code: "500",
                method: "DELETE",
                message: "Não foi possível encontrar notificacao!",
                error: error
            });
        }

    },

    login: async (req, res) => {

    }


};

module.exports = notificacaoController;