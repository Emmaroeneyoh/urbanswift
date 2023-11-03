const { RouteModel } = require("../../core/db/route");
const { handleError } = require("../../core/utils");
const {
  createrouteModel,
  retrievesinglerouteModel,
  updaterouteModel,
} = require("../model/route");

const createrouteController = async (req, res, next) => {
  const { route } = req.body;
  const routename = route.toLowerCase();
  try {
    const route = await RouteModel.findOne({ route_destination: routename });
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
      routename,
    };

    let trainee = await createrouteModel(data, res);

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

const retrievesinglerouteController = async (req, res, next) => {
  const { routeid } = req.body;
  try {
    const agency = await RouteModel.findById(routeid);
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
      routeid,
    };

    let trainee = await retrievesinglerouteModel(data, res);

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
const deleterouteController = async (req, res, next) => {
  const { routeid } = req.body;
  try {
    const agency = await RouteModel.findByIdAndDelete(routeid);

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

const retrieveallrouteController = async (req, res, next) => {
  try {
    let trainee = await RouteModel.find();

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

const updaterouteController = async (req, res, next) => {
    const { route , routeid } = req.body;
    const routename = route.toLowerCase();
    try {
      const agency = await RouteModel.findOne({ route_destination: routename });
        if (agency) {
          if (agency._id !== routeid) {
              return res.status(400).json({
                status_code: 400,
                status: false,
                message: "Agency already existed",
                data: [],
                error: "Agency already existed",
              });
            }
      }
  
      const data = {
     routename , routeid
      };
  
      let trainee = await updaterouteModel(data, res);
  
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
  retrieveallrouteController,
  retrievesinglerouteController,
  createrouteController, deleterouteController , updaterouteController
};
