const joi = require("joi");
const { handleError } = require("../../../user/core/utils");

const createsubrouteValidation = (req, res, next) => {
    const schema = joi.object({
      routeid: joi.string().required(),
      main_drive_through: joi.string().required(),
      description: joi.string().required(),
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
const updatesubrouteValidation = (req, res, next) => {
    const schema = joi.object({
      routeid: joi.string().required(),
      subrouteid: joi.string().required(),
      main_drive_through: joi.string().required(),
      description: joi.string().required(),
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
const retrievedeletesubrouteValidation = (req, res, next) => {
    const schema = joi.object({
      subrouteid: joi.string().required(),
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
    createsubrouteValidation , updatesubrouteValidation , retrievedeletesubrouteValidation
}