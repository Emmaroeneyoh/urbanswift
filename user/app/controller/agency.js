const { AgencyModel } = require("../../../general/core/db/agency");
const { handleError } = require("../../core/utils");
const {
  userretrievesingleagencyModel,
  filter_user_agency_model,
} = require("../model/agency");

const userretrieveallagencyController = async (req, res, next) => {
    try {
        const page = req.page || 1; 
        const perPage = 10;
    let trainee = await AgencyModel.find().skip((page - 1) * perPage) 
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

const userretrievesingleagencyController = async (req, res, next) => {
  try {
    const { agencyid } = req.body;
    const data = { agencyid };
    let trainee = await userretrievesingleagencyModel(data, res);
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
const useragencynamesearchController = async (req, res, next) => {
  try {
    const { name } = req.body;
    let trainee = await AgencyModel.find({ $text: { $search: name } });
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

const user_filter_agency_controller = async (req, res, next) => {
  try {
    const { name, ownership, establishment_date } = req.body;
    var query = { $and: [] };

    if (name != "") {
      query.$and.push({ name: name });
    }

    if (ownership != "") {
      query.$and.push({ ownership: ownership });
    }

    if (establishment_date != "") {
      query.$and.push({ establishment_date: establishment_date });
    }
    const timerange = { query };

    let trainee = await filter_user_agency_model(timerange, res);

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "all users logs retrieved",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

module.exports = {
  user_filter_agency_controller,
  userretrieveallagencyController,
  userretrievesingleagencyController, useragencynamesearchController
};
