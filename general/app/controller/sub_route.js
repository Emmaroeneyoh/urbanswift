const { Sub_routeModel } = require("../../core/db/sub_route");
const { createsubrouteModel, retrievesinglesubrouteModel, updatesubrouteModel } = require("../model/sub_route");

const createsubrouteController = async (req, res, next) => {
  const { main_drive_through, description, routeid } = req.body;
  const sub_route = main_drive_through.toLowerCase();
  try {
    const subroute = await Sub_routeModel.findOne({
      main_drive_through: sub_route,
      routeid,
    });
    if (subroute) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "Agency already existed",
        data: [],
        error: "Agency already existed",
      });
    }

    const data = {
      sub_route,
      description,
      routeid,
    };

    let trainee = await createsubrouteModel(data, res);

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

const retrievesinglesubrouteController = async (req, res, next) => {
  const { subrouteid } = req.body;
  try {
    const agency = await Sub_routeModel.findById(subrouteid);
    if (!agency) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "Agency already existed",
        data: [],
        error: "Agency already existed",
      });
    }

    const data = {
      subrouteid,
    };

    let trainee = await retrievesinglesubrouteModel(data, res);

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
const deletesubrouteController = async (req, res, next) => {
  const { subrouteid } = req.body;
  try {
    const agency = await Sub_routeModel.findByIdAndDelete(subrouteid);

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "login process successful",
      data: agency,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const retrieveallsubrouteController = async (req, res, next) => {
  try {
    let trainee = await Sub_routeModel.find();

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

const updatesubrouteController = async (req, res, next) => {
  const { main_drive_through, description, subrouteid } = req.body;
  const subroute = main_drive_through.toLowerCase();
  try {
    // const agency = await RouteModel.findOne({ route_destination: routename });
    // if (agency) {
    //   if (agency._id !== routeid) {
    //     return res.status(400).json({
    //       status_code: 400,
    //       status: false,
    //       message: "Agency already existed",
    //       data: [],
    //       error: "Agency already existed",
    //     });
    //   }
    // }

    const data = {
      subroute , description , subrouteid
    };

    let trainee = await updatesubrouteModel(data, res);

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
  retrievesinglesubrouteController,
  createsubrouteController,
  retrieveallsubrouteController, deletesubrouteController , updatesubrouteController
};
