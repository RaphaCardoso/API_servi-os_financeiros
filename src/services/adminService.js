const Admin = require("../models/administradores");

const adminService = {
    create: async (admin) => {
        try {
            return await Admin.create(admin);
        } catch (error) {
            throw new Error(error);
        }
    },

    getOne: async (id) => {
        try {

            const admin = await Admin.findByPk(id);

            if (!admin) {
                const error = { Error: "Erro! ID inválido, Admin não encotrado!" };
                return error;
            }

            return admin;

        } catch (error) {
            console.error(error);
            throw new Error("Erro, contate o suporte");
        }
    },

    getAll: async () => {
        try {

            return await Admin.findAll();

        } catch (error) {
            console.error(error);
            throw new Error("Erro, contate o suporte");
        }
    },

    update: async (id, data) => {
        try {
            const admin = await Admin.findByPk(id);

            if (!admin) {
                const error = { Error: "Erro! ID inválido, admin não encotrado!" };
                return error;
            }

            return await Admin.update(data);

        } catch (error) {
            console.error(error);
            throw new Error("Erro, contate o suporte");
        }
    },

    delete: async (id) => {
        try {
            const admin = await Admin.findByPk(id);

            if (!admin) {
                const error = { Error: "Erro! ID inválido, admin não encotrado!" };
                return error;
            }

            return await Admin.destroy();

        } catch (error) {
            console.error(error);
            throw new Error("Erro, contate o suporte");
        }
    }

}

module.exports = adminService;