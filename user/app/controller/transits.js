const { TransitModel } = require("../../../general/core/db/transit");
const { handleError } = require("../../core/utils");
const {
  userretrievesingletransitModel,
  filter_user_transit_model,
} = require("../model/transit");

const userretrievealltransitController = async (req, res, next) => {
    try {
        const page = req.page || 1; 
        const perPage = 10;
    let trainee = await TransitModel.find().skip((page - 1) * perPage)  
    .limit(perPage)
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
const userretrievesingletransitController = async (req, res, next) => {
  try {
    const { transitid } = req.body;
    const data = { transitid };
    let trainee = await userretrievesingletransitModel(data, res);
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
const usertransitnamesearchController = async (req, res, next) => {
  try {
    const { name } = req.body;
    let trainee = await TransitModel.find({ $text: { $search: name } })
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


const user_filter_transit_controller = async (req, res, next) => {
  try {
    const {
      name,
      ownership,
      start_time,
      stop_time,
      start_day,
      stop_day,
      establishment_date,
    } = req.body;
    var query = { $and: [] };

    if (name != "") {
      query.$and.push({ name: name });
    }

    if (ownership != "") {
      query.$and.push({ ownership: ownership });
    }
    if (start_time != "") {
      query.$and.push({ start_time: start_time });
    }
    if (stop_time != "") {
      query.$and.push({ stop_time: stop_time });
    }
    if (start_day != "") {
      query.$and.push({ start_day: start_day });
    }
    if (stop_day != "") {
      query.$and.push({ stop_day: stop_day });
    }
    if (establishment_date != "") {
      query.$and.push({ establishment_date: establishment_date });
    }
    console.log("this is query", query);
    const timerange = {  query };

    let trainee = await filter_user_transit_model(timerange, res);

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
  userretrievealltransitController,
  userretrievesingletransitController,
    user_filter_transit_controller,
    usertransitnamesearchController
};
