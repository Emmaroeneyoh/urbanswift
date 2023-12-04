
const joi = require("joi");
const { handleError } = require("../../../user/core/utils");


const createoperationValidation = (req, res, next) => {
    const schema = joi.object({
      adminid: joi.string().required(),
      transitid: joi.string().required(),
      car_price: joi.number().required(),
      seater_16_price: joi.number().required(),
      coaster_price: joi.number().required(),
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
const updateoperationValidation = (req, res, next) => {
    const schema = joi.object({
      adminid: joi.string().required(),
      transitid: joi.string().required(),
      car_price: joi.number().required(),
      seater_16_price: joi.number().required(),
      coaster_price: joi.number().required(),
      routeid: joi.string().required(),
      operationid: joi.string().required(),
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
const retrievedeleteoperationValidation = (req, res, next) => {
    const schema = joi.object({
      adminid: joi.string().required(),
      operationid: joi.string().required(),
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
    retrievedeleteoperationValidation , createoperationValidation , updateoperationValidation
}