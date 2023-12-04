const joi = require('joi');
const { handleError } = require('../utils');

const userretrievesingleagencyValidation = (req, res, next) => {
    const schema = joi.object({
      agencyid: joi.string().required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      let err = error.details[0].message;
      // let errlen = err.split(' ')
      // console.log('this is length ' , errlen.length)
     return handleError(err)(res);
    }
    return next();
  };
  
const userretrievesinglerouteValidation = (req, res, next) => {
    const schema = joi.object({
      routeid: joi.string().required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      let err = error.details[0].message;
      // let errlen = err.split(' ')
      // console.log('this is length ' , errlen.length)
     return handleError(err)(res);
    }
    return next();
  };
  

module.exports = {
    userretrievesingleagencyValidation , userretrievesinglerouteValidation
  }