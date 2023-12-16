const productService = require("../services/productService");

class productController {

    //========= GET ===========
    getAllProducts = async (req, res, next) => {
        try {

            const products = await productService.getAllProducts();
            res.status(200).json({ products });

        } catch (error) {
            throw (error);
        }
    }

    //========= POST ===========
    creat = async (req, res, next) => {
        try {
            const { productName, produce, yearOfManufacture, quantity, price } = req.body;
            let data = { productName, produce, yearOfManufacture, quantity, price };

            const products = await productService.creat(data);

            res.status(200).json({ products });

        } catch (error) {
            throw (error);
        }
    }

    //========= PUT ===========
    update = async (req, res, next) => {
        try {
            const { productName, produce, yearOfManufacture, quantity, price } = req.body;
            const { id } = req.params;
            let data = { productName, produce, yearOfManufacture, quantity, price };

            const result = await productService.update(id, data);

            if (result) {
                res.status(200).json({ "msg": "Update Success" });
            } else {
                throw new Error("Update Fail !");
            }




        } catch (error) {
            throw (error);
        }
    }

    //======== DELETE ==========
    delete = async (req, res, next) => {
        try {
            const { id } = req.params;
            const result = await productService.delete(id);

            if (result) {
                res.status(200).json({ "msg": "DELETE SUCCESS PRODUCT " });
            } else {
                throw new Error("Update Fail !");
            }

        } catch (error) {
            throw (error);
        }
    }


};

module.exports = new productController();