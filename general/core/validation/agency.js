const joi = require("joi");
const { handleError } = require("../../../user/core/utils");


const createagencyValidation = (req, res, next) => {
    const schema = joi.object({
      adminid: joi.string().required(),
      name: joi.string().required(),
      ceo: joi.string().required(),
      establishment_date: joi.string().required(),
      headquarter: joi.string().required(),
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
  
const updateagencyValidation = (req, res, next) => {
    const schema = joi.object({
      name: joi.string().required(),adminid: joi.string().required(),
      ceo: joi.string().required(),
      establishment_date: joi.string().required(),
      headquarter: joi.string().required(),
      agencyid: joi.string().required(),
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
  
const retrieveDeleteagencyValidation = (req, res, next) => {
    const schema = joi.object({
      agencyid: joi.string().required(), adminid: joi.string().required(),
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
    createagencyValidation  , updateagencyValidation  , retrieveDeleteagencyValidation
  }