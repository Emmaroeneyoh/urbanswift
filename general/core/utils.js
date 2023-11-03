const base_url = process.env.DATABASE_URL;
const PORT = process.env.PORT;
const userjwt = process.env.userJWT;
const userpasswordjwt = process.env.userpasswordjwt;
const adminJWT = process.env.adminJWT;
const adminpasswordjwt = process.env.adminpasswordjwt;
const appPassword = process.env.appPassword;
const mongoose = require('mongoose');
const { admin_rateModel } = require('./db/admin_rate');
const { Route_rateModel } = require('./db/route_rate');
const { user_rateModel } = require('./db/user_rate');


const base = 'mongodb+srv://emmaro:1234@tutorial.klpqo.mongodb.net/urbanswift?retryWrites=true&w=majority'
const coonectdb = () => {
    mongoose.set("strictQuery", false);
    mongoose.connect(base)
.then((result) => console.log('base connetced'))
.catch((err) => console.log(err))
}

const handleError = (err) => res => {
  return res.status(400).json({
    status_code: 400,
    status: false,
    message: err,
    data: [],
    error: err,
  });
}


module.exports = {
  base_url,
  PORT,
  userjwt,
  userpasswordjwt,
  adminJWT , adminpasswordjwt ,
  appPassword, coonectdb , handleError 
};
