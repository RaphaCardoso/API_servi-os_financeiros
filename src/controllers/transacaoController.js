const transacaoService = require('../services/trasacaoService');

// const bcrypt = require('bcryptjs');

const transacaoController = {

    create: async (req, res) => {
        try {

            const transacao = await transacaoService.create(req.body);

            return res.status(201).json({
                code: "201",
                method: "POST",
                message: "transacao criado com sucesso!",
                transacao: {
                    transacao
                },
                _links: {
                    self: {
                        href: `/transacao/${transacao.id}`,
                        method: "GET"
                    },
                    update: {
                        href: `/transacao/${transacao.id}`,
                        method: "PUT"
                    },
                    delete: {
                        href: `/transacao/${transacao.id}`,
                        method: "DELETE"
                    }

                }
            });

        } catch (error) {

            return res.status(500).json({
                code: "500",
                method: "POST",
                message: "Não foi possível criar transacao!",
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

            const transacao = await transacaoService.getOne(id);

            if (transacao.Error) {
                return res.status(404).json({
                    code: "404",
                    method: "GET",
                    message: ["transacao não foi encontrado!", transacao, "Digite um ID válido!"],
                    _links: {
                        create: {
                            href: `/transacao/`,
                            method: "POST"
                        },
                        update: {
                            href: `/transacao/${transacao.id}`,
                            method: "PUT"
                        },
                        delete: {
                            href: `/transacao/${transacao.id}`,
                            method: "DELETE"
                        }

                    }
                });
            };

            return res.status(201).json({
                code: "200",
                method: "GET",
                message: "transacao encontrado com sucesso!",
                transacao: {
                    transacao
                },
                _links: {
                    create: {
                        href: `/transacao/`,
                        method: "POST"
                    },
                    update: {
                        href: `/transacao/${transacao.id}`,
                        method: "PUT"
                    },
                    delete: {
                        href: `/transacao/${transacao.id}`,
                        method: "DELETE"
                    }

                }
            });

        } catch (error) {

            return res.status(500).json({
                code: "500",
                method: "GET",
                message: "Não foi possível encontrar transacao!",
                error: error
            });

        }

    },

    getAll: async (req, res) => {
        try {

            const transacaos = await transacaoService.getAll();

            return res.status(201).json({
                code: "200",
                method: "GET",
                message: "transacaos encontrados com sucesso!",
                transacao: {
                    transacaos
                },
                _links: {
                    create: {
                        href: `/transacao/`,
                        method: "POST"
                    },
                    self: {
                        href: `/transacao/:id`,
                        method: "GET"
                    },
                    update: {
                        href: `/transacao/:id`,
                        method: "PUT"
                    },
                    delete: {
                        href: `/transacao/:id`,
                        method: "DELETE"
                    }

                }
            });

        } catch (error) {

            return res.status(500).json({
                code: "500",
                method: "GET",
                message: "Não foi possível encotrar transacaos!",
                _links: {
                    create: {
                        href: `/transacao/`,
                        method: "POST"
                    },
                    update: {
                        href: `/transacao/${transacao.id}`,
                        method: "PUT"
                    },
                    delete: {
                        href: `/transacao/${transacao.id}`,
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
                ID_Conta: req.body.ID_Conta,
                Conta: req.body.Conta,
                Transacao: req.body.Transacao,
                Valor: req.body.Valor,
                Data_Transacao: req.body.Data_Transacao
            }

            const transacao = await transacaoService.update(id, data);

            if (transacao.Error) {
                return res.status(404).json({
                    code: "404",
                    method: "PUT",
                    message: ["transacao não foi encontrado!", transacao, "Digite um ID válido!"],
                    _links: {
                        self: {
                            href: `/transacao/${transacao.id}`,
                            method: "GET"
                        },
                        create: {
                            href: `/transacao/`,
                            method: "POST"
                        },
                        delete: {
                            href: `/transacao/${transacao.id}`,
                            method: "DELETE"
                        }

                    }
                });
            };

            return res.status(201).json({
                code: "200",
                method: "PUT",
                message: "transacao atualizado com sucesso!",
                transacao: {
                    transacao
                },
                _links: {
                    self: {
                        href: `/transacao/${transacao.id}`,
                        method: "GET"
                    },
                    create: {
                        href: `/transacao/`,
                        method: "POST"
                    },
                    delete: {
                        href: `/transacao/${transacao.id}`,
                        method: "DELETE"
                    }

                }
            });

        } catch (error) {
            return res.status(500).json({
                code: "500",
                method: "PUT",
                message: "Não foi possível encontrar transacao!",
                error: error
            });

        }
    },

    delete: async (req, res) => {

        try {
            const { id } = req.params;

            const transacao = await transacaoService.delete(id);

            if (transacao.Error) {
                return res.status(404).json({
                    code: "404",
                    method: "DELETE",
                    message: ["transacao não foi encontrado!", transacao, "Digite um ID válido!"],
                    _links: {
                        self: {
                            href: `/transacao/${transacao.id}`,
                            method: "GET"
                        },
                        create: {
                            href: `/transacao/`,
                            method: "POST"
                        },
                        update: {
                            href: `/transacao/${transacao.id}`,
                            method: "PUT"
                        }
                    }
                });
            };

            return res.status(201).json({
                code: "200",
                method: "DELETE",
                message: "transacao deletado com sucesso!",
                transacao: {
                    transacao
                },
                _links: {
                    self: {
                        href: `/transacao/${transacao.id}`,
                        method: "GET"
                    },
                    create: {
                        href: `/transacao/`,
                        method: "POST"
                    },
                    delete: {
                        href: `/transacao/${transacao.id}`,
                        method: "DELETE"
                    }

                }
            });


        } catch (error) {
            return res.status(500).json({
                code: "500",
                method: "DELETE",
                message: "Não foi possível encontrar transacao!",
                error: error
            });
        }

    },

    login: async (req, res) => {

    }


};

module.exports = transacaoController;