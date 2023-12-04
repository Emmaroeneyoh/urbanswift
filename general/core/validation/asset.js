const joi = require("joi");
const { handleError } = require("../../../user/core/utils");



const createassetValidation = (req, res, next) => {
    const schema = joi.object({
      adminid: joi.string().required(),
      transitid: joi.string().required(),
      total_active_vehicle: joi.number().required(),
      total_nonactive_vehicle: joi.number().required(),
      total_coastal_buses: joi.number().required(),
      total_drivers: joi.number().required(),
      total_16_seater_buses: joi.number().required(),
      total_cars: joi.number().required(),
      low: joi.number().required(),
      high: joi.number().required(),
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
const updateassetValidation = (req, res, next) => {
    const schema = joi.object({
      adminid: joi.string().required(),
      transitid: joi.string().required(),
      assetid: joi.string().required(),
      total_active_vehicle: joi.number().required(),
      total_nonactive_vehicle: joi.number().required(),
      total_coastal_buses: joi.number().required(),
      total_drivers: joi.number().required(),
      total_16_seater_buses: joi.number().required(),
      total_cars: joi.number().required(),
      low: joi.number().required(),
      high: joi.number().required(),
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
const retrievedeleteassetValidation = (req, res, next) => {
    const schema = joi.object({
      adminid: joi.string().required(),
      assetid: joi.string().required(),
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
    createassetValidation , updateassetValidation , retrievedeleteassetValidation
}