const { verifymongoodeId } = require("../../../admin/core/utils");
const { TransitModel } = require("../../core/db/transit");
const { handleError } = require("../../core/utils");
const {
  createtransitModel,
  updatetransitModel,
  retrievesingletransitModel,
  transitaddagencyModel,
  transitremoveagencyModel,
  transitaddimageModel,
  transitremoveimageModel,
} = require("../model/transit");

const createTransitController = async (req, res, next) => {
  const {
    name,
    address,
    latitude,
    longitude,
    establishment_date,
    start_time,
    stop_time,
    stop_day,
    start_day,
    agency,
    image, ownership , phone
  } = req.body;
  const transitname = name.toLowerCase();
  try {
    const transit = await TransitModel.findOne({ name: transitname });
    if (transit) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "Transit already existed",
        data: [],
        error: "Transit already existed",
      });
    }

    const data = {
      transitname,
      address,
      latitude,
      longitude,
      establishment_date,
      start_time,
      stop_time,
      stop_day,
      start_day,
      agency,
      image,ownership , phone
    };
    console.log("setp2");
    let trainee = await createtransitModel(data, res);

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

const updatetransitController = async (req, res, next) => {
  const {
    name,
    address,
    latitude,
    longitude,
    establishment_date,
    start_time,
    stop_time,
    stop_day,
    start_day,
    transitid, ownership , phone
  } = req.body;
  const transitname = name.toLowerCase();
  try {
    const transit = await TransitModel.findOne({ name: transitname });
    const catid = transit._id.toHexString();
    if (transit) {
      if (catid !== transitid) {
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
      transitname,
      transitid,
      address,
      latitude,
      longitude,
      establishment_date,
      start_time,
      stop_time,
      stop_day,
      start_day, ownership , phone
    };

    let trainee = await updatetransitModel(data, res);

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

const retrievesingletransitController = async (req, res, next) => {
  const { transitid } = req.body;
  try {
    const transit = await TransitModel.findById(transitid);
    if (!transit) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "transit already existed",
        data: [],
        error: "transit already existed",
      });
    }

    const data = {
      transitid,
    };

    let trainee = await retrievesingletransitModel(data, res);

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
const transitaddagencyController = async (req, res, next) => {
  const { transitid, agencyid } = req.body;
  try {
    const transit = await TransitModel.findById(transitid)
    const agency = transit.agency
    const checkagency = agency.find((x) => { return x.agencyid == agencyid })
    if (checkagency) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "transit already existed",
        data: [],
        error: "transit already existed",
      });
    }
    const data = {
      transitid,
      agencyid,
    };

    let trainee = await transitaddagencyModel(data, res);

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
const transitremoveagencyController = async (req, res, next) => {
  const { transitid, agencyid } = req.body;
  try {
    const data = {
      transitid,
      agencyid,
    };

    let trainee = await transitremoveagencyModel(data, res);

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
const transitaddimageController = async (req, res, next) => {
  const { transitid, url } = req.body;
  try {
    const data = {
      transitid,
      url,
    };

    let trainee = await transitaddimageModel(data, res);

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
const transitremoveimageController = async (req, res, next) => {
  const { transitid, urlid } = req.body;
  try {
    const data = {
      transitid,
      urlid,
    };

    let trainee = await transitremoveimageModel(data, res);

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

const retrievealltransitController = async (req, res, next) => {
  try {
    let trainee = await TransitModel.find();

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
  createTransitController,
  retrievealltransitController,
  retrievesingletransitController,
  updatetransitController,
  transitaddagencyController,
  transitremoveagencyController, transitaddimageController , transitremoveimageController
};
