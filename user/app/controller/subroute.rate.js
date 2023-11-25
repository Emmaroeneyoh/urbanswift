const { AgencyModel } = require("../../../general/core/db/agency");
const { TransitModel } = require("../../../general/core/db/transit");
const { handleError } = require("../../core/utils");
const {
  updatesubroutesecurityModel,
  updatesubroutenetworkModel,
  updatesubroutehoursModel,
  ratetransitModel,
  rateagencyModel,
} = require("../model/subroute.rate");

const usersubrouteratesecurityController = async (req, res, next) => {
  try {
    const { road_security_rating, userid, sub_routeid } = req.body;
    const data = { road_security_rating, userid, sub_routeid };
    let trainee = await updatesubroutesecurityModel(data, res);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "login process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const usersubrouteratenetworkController = async (req, res, next) => {
  try {
    const { road_network_rating, userid, sub_routeid } = req.body;
    const data = { road_network_rating, userid, sub_routeid };
    let trainee = await updatesubroutenetworkModel(data, res);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "login process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const usersubrouteratehourController = async (req, res, next) => {
  try {
    const { estimated_destination_hours, userid, sub_routeid } = req.body;
    const data = { estimated_destination_hours, userid, sub_routeid };
    let trainee = await updatesubroutehoursModel(data, res);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "login process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const userratetransitController = async (req, res, next) => {
  try {
    const { rate, userid, transitid } = req.body;
    const data = { rate, userid, transitid};
    let trainee = await ratetransitModel(data, res);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "login process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const userrateagencyController = async (req, res, next) => {
  try {
    const { rate, userid, agencyid } = req.body;
    const data = { rate, userid, agencyid};
    let trainee = await rateagencyModel(data, res);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "login process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

module.exports = {
  usersubrouteratesecurityController,
  usersubrouteratehourController,
  usersubrouteratenetworkController, userratetransitController , userrateagencyController
};
