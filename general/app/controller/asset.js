const { AssetModel } = require("../../core/db/asset");
const { handleError } = require("../../core/utils");
const {
  createassetModel,
  updateassetModel,
  retrievesingleassetModel,
} = require("../model/asset");

const createassetController = async (req, res, next) => {
  const {
    total_active_vehicle,
    total_nonactive_vehicle,
    total_coastal_buses,
    total_drivers,
    total_16_seater_buses,
    total_cars,
    low,
    high,
    transitid,
  } = req.body;
  try {
    const route = await AssetModel.findOne({ transitid });
    if (route) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "Agency already existed",
        data: [],
        error: "Agency already existed",
      });
    }

    const data = {
      total_active_vehicle,
      total_nonactive_vehicle,
      total_coastal_buses,
      total_drivers,
      total_16_seater_buses,
      total_cars,
      low,
      high,
      transitid,
    };

    let trainee = await createassetModel(data, res);

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
const updateassetController = async (req, res, next) => {
  const {
    total_active_vehicle,
    total_nonactive_vehicle,
    total_coastal_buses,
    total_drivers,
    total_16_seater_buses,
    total_cars,
    low,
    high,
    transitid,
    assetid,
  } = req.body;
  try {
    const data = {
      total_active_vehicle,
      total_nonactive_vehicle,
      total_coastal_buses,
      total_drivers,
      total_16_seater_buses,
      total_cars,
      low,
      high,
      transitid,
      assetid,
    };

    let trainee = await updateassetModel(data, res);

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
const retrievesingleassetController = async (req, res, next) => {
  const { assetid } = req.body;
  try {
    const data = {
      assetid,
    };

    let trainee = await retrievesingleassetModel(data, res);

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
const deleteassetController = async (req, res, next) => {
  const { assetid } = req.body;
  try {
    const data = {
      assetid,
    };

    let trainee = await AssetModel.findByIdAndDelete(assetid);

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
const retrieveallassetController = async (req, res, next) => {
  try {
    let trainee = await AssetModel.find();
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
  createassetController,
  updateassetController,
  deleteassetController,
  retrieveallassetController, retrievesingleassetController
};
