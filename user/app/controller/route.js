const { RouteModel } = require("../../../general/core/db/route");
const { OperationModel } = require("../../../general/core/db/route_operation");
const { Sub_routeModel } = require("../../../general/core/db/sub_route");
const { handleError } = require("../../core/utils");
const {
  userretrievesinglerouteModel,
  filter_user_operation_model,
} = require("../model/route");

const userretrieveallrouteController = async (req, res, next) => {
  try {
    const page = req.page || 1;
    const perPage = 10;
    let trainee = await RouteModel.find().skip((page - 1) * perPage);
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

const userretrievesinglerouteController = async (req, res, next) => {
  try {
    const { routeid } = req.body;
    const data = { routeid };
    let trainee = await userretrievesinglerouteModel(data, res);
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
const userretrievesubrouteController = async (req, res, next) => {
  try {
    const { routeid } = req.body;

    let trainee = await Sub_routeModel.find({ routeid });
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
const userretrieveoperationController = async (req, res, next) => {
  try {
    const { routeid } = req.body;

    const operation = await OperationModel.find({ routeid }).populate({
      path: "transitid",
      select: "name address",
    });
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "login process successful",
      data: operation,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const user_filter_operation_controller = async (req, res, next) => {
  try {
    const {routeid,
      high_car_price,
      low_car_price,
      high_seater_16_price,
      low_seater_16_price,
      low_coaster_price,
      high_coaster_price,
      transitid,
    } = req.body;
    var query = { $and: [] };

    if (transitid != "") {
      query.$and.push({ transitid: transitid });
    }
    if (routeid != "") {
      query.$and.push({ routeid: routeid });
    }

    if (low_car_price != 0) {
      query.$and.push({ car_price: { $gte: low_car_price } });
    }
    if (high_car_price != 0) {
      query.$and.push({ car_price: { $lte: high_car_price } });
    }

    if (low_seater_16_price != 0) {
      query.$and.push({ seater_16_price: { $gte: low_seater_16_price } });
    }
    if (high_seater_16_price != 0) {
      query.$and.push({ seater_16_price: { $lte: high_seater_16_price } });
    }

    if (low_coaster_price != 0) {
      query.$and.push({ coaster_price: { $gte: low_coaster_price } });
    }
    if (high_coaster_price != 0) {
      query.$and.push({ coaster_price: { $lte: high_coaster_price } });
    }

    console.log("this is query", query);
    const timerange = { query };

    let trainee = await filter_user_operation_model(timerange, res);

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
  userretrievesinglerouteController,
  userretrieveallrouteController,
  user_filter_operation_controller,userretrieveoperationController , userretrievesubrouteController
};
