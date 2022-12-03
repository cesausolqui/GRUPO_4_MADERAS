const usersController = {
    login: (req,res)=> {res.render('users/login')},
    register: (req,res)=> {res.render('users/register')},
    productCart: (req,res)=> {res.render('users/productCart')},
    productDetail: (req,res)=> {res.render('users/productDetail')},
}

module.exports = usersController;