class userController {
    creat = (req, res, next) => {
        try {
            const { username, password } = req.body;
            // console.log(username, password);
             abc();
            res.status(200).json({
            username,
            password
    });
        } catch (error) {
           throw(error);
        }
    }

    get = (req, res, next) => {
        try {
            let id = req.params.id;
            console.log(id);
            res.status(200).json({msg: `Get Id : ${id}`});
        } catch (error) {
            throw(error);
        }
    }

    update = (req, res, next) => {
        try {
            const { username, password } = req.body;
            // console.log(username, password);
            // abc();
            res.status(200).json({
            username,
            password
    });
        } catch (error) {
            throw(error);
        }
    }

    delete = (req, res, next) => {
        try {
            const id = req.params.id;
            ;
            console.log(id);
            res.status(200).json({id});
        } catch (error) {
            throw(error);
        }
    }
};


module.exports = new userController ();