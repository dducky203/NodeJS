const Customer = require('../models/Customer');

class customerSevices {
    //========= GET ===========
    getAllCus = async () => {
        try {
            //xu li
            //goi den model
            const customers = await Customer.find({});

            return customers;

        } catch (error) {
            throw error;
        }
    }

    //========= POST ===========
    creat = async (dataCustomer) => {
        try {
            //xu li
            //goi den model
            const customer = new Customer(dataCustomer);
            await customer.save();
            return customer;

        } catch (error) {
            throw error;
        }
    }

    //========= PUT ===========
    update = async (id, data) => {
        try {
            //xu li
            //goi den model
            const result = await Customer.updateOne({ _id: id }, { birthday: data.birthday });

            return true;

        } catch (error) {
            throw error;
        }
    }

    //======== DELETE =========
    delete = async (id, data) => {
        try {
            //xu li
            //goi den model
            const customer = await Customer.findByIdAndDelete(id);
            console.log(customer);

            return true;

        } catch (error) {
            throw error;
        }
    }

}

module.exports = new customerSevices();