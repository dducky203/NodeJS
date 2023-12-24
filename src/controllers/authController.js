const jwt = require('jsonwebtoken');

class authController{
    login = (req, res, next) =>{
        try {
            //xu ly login
            // check username and password in database
            // ton tai user do => tao ra token
            // khong ton tai user do => in ra loi user not found
            console.log('Login success');

            const {username, password} = req.body;

            
            const token = jwt.sign({ username }, process.env.SECERT_KEY_JWT);

            res.status(200).json({
                token: token
            })
            
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new authController ();