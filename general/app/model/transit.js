const { TransitModel } = require("../../core/db/transit");

const createtransitModel = async (data, res) => {
  try {
    const {
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
      image,  ownership
    } = data;
    console.log(agency)
    const form = await new TransitModel({
      name: transitname,
      address, ownership ,
      latitude,
      establishment_date,
      longitude,
      operational_day: {
        start_day,
        stop_day,
      },
      operational_time: {
        start_time,
        stop_time,
      },
      agency,
      image,
    });

    const userDetails = await form.save();

    return userDetails;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

const updatetransitModel = async (data, res) => {
  try {
    const {
      transitname,
      address,
      latitude,
      longitude,
      establishment_date,
      start_time,
      stop_time,
      stop_day,
      start_day,
      transitid, ownership
    } = data;
    const form = await TransitModel.findByIdAndUpdate(transitid, {
      $set: {
        name: transitname,
        address, ownership ,
        latitude,
        longitude,
        establishment_date,
        operational_day: {
          start_day,
          stop_day,
        },
        operational_time: {
          start_time,
          stop_time,
        },
      },
    });
    return form;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};
const transitaddagencyModel = async (data, res) => {
  try {
    const { agencyid, transitid } = data;
    const form = await TransitModel.findByIdAndUpdate(transitid, {
      $push: {
        agency: { agencyid },
      },
    });
    return form;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};
const transitremoveagencyModel = async (data, res) => {
  try {
    const { agencyid, transitid } = data;
    const form = await TransitModel.findByIdAndUpdate(transitid, {
      $pull: {
        agency: { _id :agencyid },
      },
    });
    return form;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

const transitaddimageModel = async (data, res) => {
  try {
    const { url, transitid } = data;
    const form = await TransitModel.findByIdAndUpdate(transitid, {
      $push: {
        image: { url },
      },
    });
    return form;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};
const transitremoveimageModel = async (data, res) => {
  try {
    const { urlid, transitid } = data;
    const form = await TransitModel.findByIdAndUpdate(transitid, {
      $pull: {
        image: { _id:urlid },
      },
    });
    return form;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

const retrievesingletransitModel = async (data, res) => {
  try {
    const { transitid } = data;
    const form = await TransitModel.findById(transitid);
    return form;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

module.exports = {
  createtransitModel,
  retrievesingletransitModel,
  updatetransitModel,
  transitremoveagencyModel,
  transitaddagencyModel,
  transitaddimageModel,
  transitremoveimageModel,
};
