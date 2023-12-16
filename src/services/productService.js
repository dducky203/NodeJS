const Product = require("../models/Product");

class productService {
    //========= GET ===========
    getAllProducts = async () => {
        try {
            const products = await Product.find({});
            return products;
        } catch (error) {
            throw error;
        }
    }


    //========= POST ===========
    creat = async (dataProduct) => {
        try {
            const product = new Product(dataProduct);
            await product.save();

            return product;
        } catch (error) {
            throw error;
        }
    }

    //========= PUT ===========
    update = async (id, data) => {
        try {
            const result = await Product.updateOne({ _id: id }, { produce: data.produce });
            return true;

        } catch (error) {
            throw error;
        }
    }


    //======== DELETE ==========
    delete = async (id) => {
        try {
            const product = await Product.findByIdAndDelete(id);
            console.log(product);
            return product;

        } catch (error) {
            throw error;
        }
    }

}


module.exports = new productService();


