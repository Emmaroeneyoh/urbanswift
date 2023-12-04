const joi = require("joi");
const { handleError } = require("../utils");

const userratesecurityValidation = (req, res, next) => {
  const schema = joi.object({
    userid: joi.string().required(),
    sub_routeid: joi.string().required(),
    road_security_rating: joi.number().required(),
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
const userrateneworkValidation = (req, res, next) => {
  const schema = joi.object({
    userid: joi.string().required(),
    sub_routeid: joi.string().required(),
    road_network_rating: joi.number().required(),
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
const userratehourValidation = (req, res, next) => {
  const schema = joi.object({
    userid: joi.string().required(),
    sub_routeid: joi.string().required(),
    estimated_destination_hours: joi.number().required(),
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
const userratetransitValidation = (req, res, next) => {
  const schema = joi.object({
    userid: joi.string().required(),
    transitid: joi.string().required(),
    rate: joi.number().required(),
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
const userrateagencyValidation = (req, res, next) => {
  const schema = joi.object({
    userid: joi.string().required(),
    agencyid: joi.string().required(),
    rate: joi.number().required(),
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
  userratesecurityValidation,
  userratehourValidation,
  userrateneworkValidation, userratetransitValidation , userrateagencyValidation
};
