const { SavedagencyModel } = require("../../core/db/saved_agency");
const { SavedsubrouteModel } = require("../../core/db/saved_subroute");
const { SavedtransitModel } = require("../../core/db/saved_transits");
const { handleError } = require("../../core/utils");
const { landingpageModel } = require("../model/landingpage");

const landingpageController = async (req, res, next) => {
  try {
    const data = "time";
    let trainee = await landingpageModel(data, res);
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

const savetransitController = async (req, res, next) => {
  try {
    const { transitid, userid } = req.body;
    const checksaved = await SavedtransitModel.findOne({ transitid, userid });
    if (checksaved) {
      return res.status(400).json({
        status_code: 400,
        status: true,
        message: "transt already saved",
      });
    }
    let savedtransit = await new SavedtransitModel({ transitid, userid });
    let trainee = await savedtransit.save();
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
const retrievetransitController = async (req, res, next) => {
  try {
    const { userid } = req.body;
    let savedtransit = await SavedtransitModel.find({ userid }).populate({
      path: "transitid",
      select: "name address",
    });
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "login process successful",
      data: savedtransit,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};



const savesubrouteController = async (req, res, next) => {
  try {
    const { subrouteid, userid } = req.body;
    const checksaved = await SavedsubrouteModel.findOne({ subrouteid, userid });

    if (checksaved) {
      return res.status(400).json({
        status_code: 400,
        status: true,
        message: "transt already saved",
      });
    }
    let savedsubroute = await new SavedsubrouteModel({ subrouteid, userid });
    let trainee = await savedsubroute.save();
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
const retrievesubrouteController = async (req, res, next) => {
  try {
    const { userid } = req.body;
    let savedsubroute = await SavedsubrouteModel.find({ userid }).populate({
      path: "subrouteid",
      select: "main_drive_through",
    });
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "login process successful",
      data: savedsubroute,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const saveagencyController = async (req, res, next) => {
  try {
    const { agencyid, userid } = req.body;
    const checksaved = await SavedagencyModel.findOne({ agencyid, userid });
    if (checksaved) {
      return res.status(400).json({
        status_code: 400,
        status: true,
        message: "transt already saved",
      });
    }
    let savedagency = await new SavedagencyModel({ agencyid, userid });
    let trainee = await savedagency.save();
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
const retrieveagencyController = async (req, res, next) => {
  try {
    const { userid } = req.body;
    let savedagency = await SavedagencyModel.find({ userid }).populate({
      path: "agencyid",
      select: "name",
    })
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "login process successful",
      data: savedagency,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

module.exports = {
  landingpageController,
  retrievetransitController,
  savetransitController,
  retrievesubrouteController,
  savesubrouteController,
  retrieveagencyController,
  saveagencyController,
};
