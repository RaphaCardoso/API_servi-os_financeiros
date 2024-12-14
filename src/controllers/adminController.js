const adminService = require('../services/adminService');

// const bcrypt = require('bcryptjs');

const adminController = {

    create: async (req, res) => {
        try {

            const admin = await adminService.create(req.body);

            return res.status(201).json({
                code: "201",
                method: "POST",
                message: "admin criado com sucesso!",
                admin: {
                    admin
                },
                _links: {
                    self: {
                        href: `/admin/${admin.id}`,
                        method: "GET"
                    },
                    update: {
                        href: `/admin/${admin.id}`,
                        method: "PUT"
                    },
                    delete: {
                        href: `/admin/${admin.id}`,
                        method: "DELETE"
                    }

                }
            });

        } catch (error) {

            return res.status(500).json({
                code: "500",
                method: "POST",
                message: "Não foi possível criar admin!",
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

            const admin = await adminService.getOne(id);

            if (admin.Error) {
                return res.status(404).json({
                    code: "404",
                    method: "GET",
                    message: ["admin não foi encontrado!", admin, "Digite um ID válido!"],
                    _links: {
                        create: {
                            href: `/admin/`,
                            method: "POST"
                        },
                        update: {
                            href: `/admin/${admin.id}`,
                            method: "PUT"
                        },
                        delete: {
                            href: `/admin/${admin.id}`,
                            method: "DELETE"
                        }

                    }
                });
            };

            return res.status(201).json({
                code: "200",
                method: "GET",
                message: "admin encontrado com sucesso!",
                admin: {
                    admin
                },
                _links: {
                    create: {
                        href: `/admin/`,
                        method: "POST"
                    },
                    update: {
                        href: `/admin/${admin.id}`,
                        method: "PUT"
                    },
                    delete: {
                        href: `/admin/${admin.id}`,
                        method: "DELETE"
                    }

                }
            });

        } catch (error) {

            return res.status(500).json({
                code: "500",
                method: "GET",
                message: "Não foi possível encontrar admin!",
                error: error
            });

        }

    },

    getAll: async (req, res) => {
        try {

            const admins = await adminService.getAll();

            return res.status(201).json({
                code: "200",
                method: "GET",
                message: "admins encontrados com sucesso!",
                admin: {
                    admins
                },
                _links: {
                    create: {
                        href: `/admin/`,
                        method: "POST"
                    },
                    self: {
                        href: `/admin/:id`,
                        method: "GET"
                    },
                    update: {
                        href: `/admin/:id`,
                        method: "PUT"
                    },
                    delete: {
                        href: `/admin/:id`,
                        method: "DELETE"
                    }

                }
            });

        } catch (error) {

            return res.status(500).json({
                code: "500",
                method: "GET",
                message: "Não foi possível encotrar admins!",
                _links: {
                    create: {
                        href: `/admin/`,
                        method: "POST"
                    },
                    update: {
                        href: `/admin/${admin.id}`,
                        method: "PUT"
                    },
                    delete: {
                        href: `/admin/${admin.id}`,
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
                Nome_admin: req.body.Nome_admin,
                Email: req.body.Email
            }

            const admin = await adminService.update(id, data);

            if (admin.Error) {
                return res.status(404).json({
                    code: "404",
                    method: "PUT",
                    message: ["admin não foi encontrado!", admin, "Digite um ID válido!"],
                    _links: {
                        self: {
                            href: `/admin/${admin.id}`,
                            method: "GET"
                        },
                        create: {
                            href: `/admin/`,
                            method: "POST"
                        },
                        delete: {
                            href: `/admin/${admin.id}`,
                            method: "DELETE"
                        }

                    }
                });
            };

            return res.status(201).json({
                code: "200",
                method: "PUT",
                message: "admin atualizado com sucesso!",
                admin: {
                    admin
                },
                _links: {
                    self: {
                        href: `/admin/${admin.id}`,
                        method: "GET"
                    },
                    create: {
                        href: `/admin/`,
                        method: "POST"
                    },
                    delete: {
                        href: `/admin/${admin.id}`,
                        method: "DELETE"
                    }

                }
            });

        } catch (error) {
            return res.status(500).json({
                code: "500",
                method: "PUT",
                message: "Não foi possível encontrar admin!",
                error: error
            });

        }
    },

    delete: async (req, res) => {

        try {
            const { id } = req.params;

            const admin = await adminService.delete(id);

            if (admin.Error) {
                return res.status(404).json({
                    code: "404",
                    method: "DELETE",
                    message: ["admin não foi encontrado!", admin, "Digite um ID válido!"],
                    _links: {
                        self: {
                            href: `/admin/${admin.id}`,
                            method: "GET"
                        },
                        create: {
                            href: `/admin/`,
                            method: "POST"
                        },
                        update: {
                            href: `/admin/${admin.id}`,
                            method: "PUT"
                        }
                    }
                });
            };

            return res.status(201).json({
                code: "200",
                method: "DELETE",
                message: "admin deletado com sucesso!",
                admin: {
                    admin
                },
                _links: {
                    self: {
                        href: `/admin/${admin.id}`,
                        method: "GET"
                    },
                    create: {
                        href: `/admin/`,
                        method: "POST"
                    },
                    delete: {
                        href: `/admin/${admin.id}`,
                        method: "DELETE"
                    }

                }
            });


        } catch (error) {
            return res.status(500).json({
                code: "500",
                method: "DELETE",
                message: "Não foi possível encontrar admin!",
                error: error
            });
        }

    },

    login: async (req, res) => {

    }


};

module.exports = adminController;