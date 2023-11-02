const joi = require("joi");
const { handleError } = require("../../../user/core/utils");

const createtransitValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required(),
    name: joi.string().required(),
    address: joi.string().required(),
    latitude: joi.string().required(),
    longitude: joi.string().required(),
    start_day: joi.string().required(),
    stop_day: joi.string().required(),
    start_time: joi.string().required(),
    stop_time: joi.string().required(),
    agency: joi.array().required(),
    image: joi.array().required(),
    establishment_date: joi.string().required(),
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
const updatetransitValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required(),
    name: joi.string().required(),
    address: joi.string().required(),
    latitude: joi.string().required(),
    longitude: joi.string().required(),
    start_day: joi.string().required(),
    stop_day: joi.string().required(),
    start_time: joi.string().required(),
    stop_time: joi.string().required(),
    transitid: joi.string().required(),
    establishment_date: joi.string().required(),
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
const retrievedeletetransitValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required(),
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
const addremovetransitagencyValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required(),
    transitid: joi.string().required(),
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

const addtransitimageValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required(),
    transitid: joi.string().required(),
    url: joi.string().required(),
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
const removetransitimageValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required(),
    transitid: joi.string().required(),
    urlid: joi.string().required(),
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
  retrievedeletetransitValidation,
  updatetransitValidation,
  createtransitValidation,
  addremovetransitagencyValidation,
  addtransitimageValidation,
  removetransitimageValidation,
};
