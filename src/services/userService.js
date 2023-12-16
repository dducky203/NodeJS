const User = require("../models/User");

class userSevices {

    //=====POST=====
    creat = async (dataUser) => {
        try {
            //xu li
            //goi den model
            const user = new User(dataUser);
            await user.save();
            return user;

        } catch (error) {
            throw error;
        }
    }

    //=====GET=====
    get = async () => {
        try {
            //xu li
            //goi den model
            const users = await User.find({"username" : "hiduon1"});

            return users;
        } catch (error) {
            throw error;
        }
    }

    //=====UPDATE=====
    update = async (id, data) => {
        try {
            //xu li
            //goi den model
            const result = await User.updateOne({_id : id}, {age: data.age});
            return true;

        } catch (error) {
            throw error;
        }
    }

    //=====DELETE=====
    delete = async (id) => {
        try {
            //xu li
            //goi den model
            const user = await User.findByIdAndDelete(id);
            console.log(user);
            //await user.deleteOne();

            return true;

        } catch (error) {
            throw error;
        }
    }

}

module.exports = new userSevices();