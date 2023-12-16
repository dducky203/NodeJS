const userService = require("../services/userService");

class userController {
    creat = async (req, res, next) => {
        try {
            const { username, email, phone, age } = req.body;
            //goi den tang service

            let data = { username, email, phone, age };
            const user = await userService.creat(data);

            res.status(200).json({ user });
        } catch (error) {
            throw (error);
        }
    }

    getAll = async (req, res, next) => {
        try {
            //Goi den service
            const users = await userService.get();
            res.status(200).json({ users });

        } catch (error) {
            throw (error);
        }
    }

    update = async (req, res, next) => {
        try {
            const { username, email, phone, age } = req.body;
            const { id } = req.params;

            //goi den tang service

            let data = { username, email, phone, age };
            const result = await userService.update(id, data);
            if (result) {
               res.status(200).json({ 'msg': 'Updated' });
            } else {
                throw new Error('Update fail!');
            }

        } catch (error) {
            throw (error);
        }
    }

    delete = async (req, res, next) => {
        try {
            const { id } = req.params;

            //goi den tang service

            const result = await userService.delete(id);
            if (result) {
               res.status(200).json({ 'msg': 'Deleted' });
            } else {
                throw new Error('Delete fail!');
            }

        } catch (error) {
            throw (error);
        }
    }
};


module.exports = new userController();