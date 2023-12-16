const customerSevice = require("../services/customerSevice");

class customerController {
    //========= GET ===========
    getAllCus = async (req, res, next) => {
        //Goi den service
        const customers = await customerSevice.getAllCus();
        res.status(200).json({ customers });

    }

    //========= POST ===========
    creat = async (req, res, next) => {
        try {
            //Goi den service
            const { fullName, phone, email, address, birthday, gender } = req.body;

            let data = { fullName, phone, email, address, birthday, gender };
            const customer = await customerSevice.creat(data);

            res.status(200).json({ customer });
        } catch (error) {
            throw (error);
        }
    }

    //========= PUT ===========
    update = async (req, res, next) => {
        try {
            //Goi den service
            const { fullName, phone, email, address, birthday, gender } = req.body;
            const { id } = req.params;

            let data = { fullName, phone, email, address, birthday, gender };
            const result = await customerSevice.update(id, data);

            if (result) {
                res.status(200).json({ "msg": "Update Success" });
            } else {
                throw new Error("Update Fail!");
            }

        } catch (error) {
            throw (error);
        }
    }

    //======== DELETE ==========
    delete = async (req, res, next) => {
        try {
            //Goi den service
            const {id} = req.params;
            const result = await customerSevice.delete(id);

            if (result){
                res.status(200).json({ "msg": "DELETE SUCCESS" });
            }else{
                throw new Error("DELETE FAIL!")
            }    
            
        } catch (error) {
            throw (error);
        }
    }



};

module.exports = new customerController();