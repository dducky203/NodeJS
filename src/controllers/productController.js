class productController {

    //========= GET ===========
    get = (req, res, next) =>{
        try {
            let id = req.params.id;
            console.log(id);
            res.status(200).json({msg:`Method Get from product have id: ${id} `});
        } catch (error) {
            throw(error);
        }
    }

    //========= POST ===========
    creat = (req, res, next) =>{
        try {
            const { productName, quantity } = req.body;
            console.log(productName, quantity);
            res.status(200).json({
                productName,
                quantity
            });
        } catch (error) {
            throw(error);
        }
    }

    //========= PUT ===========
    update = (req, res, next) =>{
        try {
            const { productName, quantity } = req.body;
            console.log(productName, quantity);
            res.status(200).json({
                productName,
                quantity
            });
        } catch (error) {
            throw(error);
        }
    }

    //======== DELETE ==========
    delete = (req, res, next) =>{
        try {
            const id = req.params.id;
            console.log(`DELETE SUCCESS PRODUCT HAVE ID: ${id}`);
            res.status(200).json({msg:`DELETE SUCCESS PRODUCT HAVE ID: ${id}`});
        } catch (error) {
            throw (error);
        }
    }


};

module.exports = new productController ();