const Response = require('../helpers/response.helper');

module.exports.login = (req,res,next) => {
    try {
        let { email, password } = req.body;
        
        if(email !== 'duongvanthienbkhoa@gmail.com') {
            return next(new Error('Email khong ton tai'));
        }

        if(password !== '123123') {
            return next(new Error('Password khong dung'));
        } 

        // res.json({ status: 'done' });
        Response.success(res, { name: 'Duong Van Thien'});
    } catch (error) {
        return next(new Error(error)); // Vừa chạy hàm next vừa dừng hàm được vì return
    }
} 