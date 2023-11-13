const joi = require("joi");
const { handleError } = require("../utils");

const userretrievesinglettransitValidation = (req, res, next) => {
  const schema = joi.object({
    transitid: joi.string().required(),
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

const savetransitValidation = (req, res, next) => {
  const schema = joi.object({
    transitid: joi.string().required(),
    userid: joi.string().required(),
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

const savesubrouteValidation = (req, res, next) => {
  const schema = joi.object({
    subrouteid: joi.string().required(),
    userid: joi.string().required(),
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
const saveagencyValidation = (req, res, next) => {
  const schema = joi.object({
    agencyid: joi.string().required(),
    userid: joi.string().required(),
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
  userretrievesinglettransitValidation,
  savetransitValidation,
  savesubrouteValidation,
  saveagencyValidation,
};
