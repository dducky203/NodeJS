class customerController {
    //========= GET ===========
    get = (req, res, next) =>{
        try {
            let id = req.params.id;
            console.log(id);
            res.status(200).json({ msg: `Method Get have ID : ${id} ` });
        } catch (error) {
            throw(error);
        }
    }

    //========= POST ===========
    creat = (req, res, next) =>{
        try {
            const {cusName , gender} = req.body;
            console.log(cusName , gender);
            res.status(200).json({
                cusName,
                gender
        });
        } catch (error) {
            throw(error);
        }
    }

    //========= PUT ===========
    update = (req, res, next) =>{
        try {
            const {cusName , gender} = req.body;
            console.log(cusName , gender);
            res.status(200).json({
                cusName,
                gender
        });
        } catch (error) {
            throw(error);
        }
    }

    //======== DELETE ==========
    delete = (req, res, next) =>{
        try {
            const id = req.params.id;
            console.log(`DELETE SUCCESS: ${id}`);
            res.status(200).json({msg:`DELETE SUCCESS: ${id}`});
        } catch (error) {
            throw (error);
        }
    }



};

module.exports = new customerController();