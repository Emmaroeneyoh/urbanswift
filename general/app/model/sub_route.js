const { Sub_routeModel } = require("../../core/db/sub_route");

const createsubrouteModel = async (data, res) => {
  try {
    const { sub_route, description, routeid } = data;
    const form = await new Sub_routeModel({
      main_drive_through: sub_route,
      description,
      routeid,
    });

    const userDetails = await form.save();

    return userDetails;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

const updatesubrouteModel = async (data, res) => {
  try {
    const { subroute, description, subrouteid } = data;
    const form = await Sub_routeModel.findByIdAndUpdate(subrouteid, {
      $set: {
        main_drive_through: subroute,
        description,
      },
    });
    return form;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

const retrievesinglesubrouteModel = async (data, res) => {
  try {
    const { subrouteid } = data;
    const form = await Sub_routeModel.findById(subrouteid);
    return form;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

module.exports = {
  createsubrouteModel,
  retrievesinglesubrouteModel,
  updatesubrouteModel,
};
