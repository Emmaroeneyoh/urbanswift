const { OperationModel } = require("../../core/db/route_operation");
const { handleError } = require("../../core/utils");
const {
  createoperationModel,
  updateoperationModel,
  retrievesingleoperationModel,
} = require("../model/operation");

const createoperationController = async (req, res, next) => {
  const { car_price, seater_16_price, coaster_price, transitid, routeid } =
    req.body;
  try {
    const route = await OperationModel.findOne({ routeid, transitid });
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
      car_price,
      seater_16_price,
      coaster_price,
      transitid,
      routeid,
    };

    let trainee = await createoperationModel(data, res);

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "login process successful",
      data: trainee,
    });
  } catch (error) {
    console.log('error' , error);
    handleError(error.message)(res);
  }
};
const updateoperationController = async (req, res, next) => {
  const {
    car_price,
    seater_16_price,
    coaster_price,
    transitid,
    routeid,
    operationid,
  } = req.body;
  try {
    const data = {
      car_price,
      seater_16_price,
      coaster_price,
      transitid,
      routeid,
      operationid,
    };

    let trainee = await updateoperationModel(data, res);

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
const retrievesingleoperationController = async (req, res, next) => {
  const { operationid } = req.body;
  try {
    const data = {
      operationid,
    };

    let trainee = await retrievesingleoperationModel(data, res);

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
const deleteoperationController = async (req, res, next) => {
  const { operationid } = req.body;
  try {
    let trainee = await OperationModel.findByIdAndDelete(operationid);

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
const retrievealloperationController = async (req, res, next) => {
  const { operationid } = req.body;
  try {
    let trainee = await OperationModel.find();

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
  createoperationController,
  updateoperationController,
  retrievealloperationController,
  deleteoperationController,
  retrievesingleoperationController,
};
