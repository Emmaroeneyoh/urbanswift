const { AgencyModel } = require("../../core/db/agency");
const { handleError } = require("../../core/utils");
const {
  createAgencyModel,
  retrievesingleAgencyModel,
  updateAgencyModel,
} = require("../model/agency");


const createAgencyController = async (req, res, next) => {
  const { name, ceo, establishment_date, headquarter , ownership , image } = req.body;
  const agencyname = name.toLowerCase();
  try {
    const agency = await AgencyModel.findOne({ name: agencyname });
    if (agency) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "Agency already existed",
        data: [],
        error: "Agency already existed",
      });
    }

    const data = {
      ceo,
      establishment_date,
      headquarter,
      agencyname, ownership , image
    };

    let trainee = await createAgencyModel(data, res);

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "login process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    // handleError(error.message)(res);
  }
};

const retrievesingleAgencyController = async (req, res, next) => {
  const { agencyid } = req.body;
  try {
    const agency = await AgencyModel.findById(agencyid);
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
      agencyid,
    };

    let trainee = await retrievesingleAgencyModel(data, res);

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
const deleteAgencyController = async (req, res, next) => {
  const { agencyid } = req.body;
  try {
    const agency = await AgencyModel.findByIdAndDelete(agencyid);

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

const retrieveallAgencyController = async (req, res, next) => {
  try {
    let trainee = await AgencyModel.find();

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


const updateAgencyController = async (req, res, next) => {
  const { name, ceo, establishment_date, headquarter, agencyid , ownership , image } = req.body;
  const agencyname = name.toLowerCase();
  try {
    const agency = await AgencyModel.findOne({ name: agencyname });
    const catid = agency._id.toHexString();
      if (agency) {
        if (catid !== agencyid) {
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
      ceo,
      establishment_date,
      headquarter,
      agencyname,
      agencyid,  ownership , image
    };

    let trainee = await updateAgencyModel(data, res);

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
  createAgencyController,
  retrievesingleAgencyController,
  updateAgencyController,
  retrieveallAgencyController,  deleteAgencyController 
};
