const joi = require("joi");
const { handleError } = require("../../../user/core/utils");


const createrouteValidation = (req, res, next) => {
    const schema = joi.object({
      route: joi.string().required(),
      adminid: joi.string().required(),
      
    });
    const { error } = schema.validate(req.body);
    if (error) {
      let err = error.details[0].message;
      // let errlen = err.split(' ')
      // console.log('this is length ' , errlen.length)
      handleError(err)(res);
    }
    return next();
  };
  
const retrievedeleterouteValidation = (req, res, next) => {
    const schema = joi.object({
      routeid: joi.string().required(),
      adminid: joi.string().required(),
      
    });
    const { error } = schema.validate(req.body);
    if (error) {
      let err = error.details[0].message;
      // let errlen = err.split(' ')
      // console.log('this is length ' , errlen.length)
      handleError(err)(res);
    }
    return next();
  };
  
const updaterouteValidation = (req, res, next) => {
    const schema = joi.object({
      routeid: joi.string().required(),
      route: joi.string().required(),
      adminid: joi.string().required(),
      
    });
    const { error } = schema.validate(req.body);
    if (error) {
      let err = error.details[0].message;
      // let errlen = err.split(' ')
      // console.log('this is length ' , errlen.length)
      handleError(err)(res);
    }
    return next();
  };
  

module.exports = {
    updaterouteValidation , createrouteValidation , retrievedeleterouteValidation
  }