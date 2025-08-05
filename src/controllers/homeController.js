// import db from '../models/index';
const db = require('../models/index');
let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        console.log('---------')
        console.log(data)
        return res.render('homepage.ejs');
    }
    catch (e) {
        console.log(_e)
    }

}

//quy dinh mot objetc gom
//object:{
//      key:'',
//      value:''
//}

module.exports = {
    getHomePage: getHomePage,
}