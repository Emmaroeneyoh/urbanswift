const { AgencyModel } = require("../../../general/core/db/agency");
const { AssetModel } = require("../../../general/core/db/asset");
const { OperationModel } = require("../../../general/core/db/route_operation");
const { TransitModel } = require("../../../general/core/db/transit");
const { handleError } = require("../../core/utils");

const userretrievesingletransitModel = async (data, res) => {
  try {
    const { transitid } = data;
    const transit = await TransitModel.findById(transitid);
    const asset = await AssetModel.findOne({ transitid });
    const operation = await OperationModel.find({ transitid }).populate({
      path: "routeid",
      select: "route_destination",
    });
    const agency = await AgencyModel.find({ transitid }).populate({
      path: "agencyid",
      select: "name",
    });
    const info = { transit, asset, operation, agency };
    return info;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};


const filter_user_transit_model = async (datas, res) => {
  try {
    const { query } = datas;
    console.log(query.$and);
    console.log(query.$and.length);

    if (query.$and.length == 0) {
      const userData = await TransitModel.find();
      const transitnames = userData.map((item) => item.name);
      const start_times = userData.map(
        (item) => item.operational_time.start_time
      );
      const stop_times = userData.map(
        (item) => item.operational_time.stop_time
      );
      const stop_days = userData.map((item) => item.operational_day.stop_day);
      const start_days = userData.map((item) => item.operational_day.start_day);
      const establishment_dates = userData.map(
        (item) => item.establishment_date
      );
      const filterdata = {
        transitnames,
        start_times,
        stop_times,
        stop_days,
        start_days,
        establishment_dates,
        userData,
      };
      return filterdata;
    }
    const transitdata = await TransitModel.find(query);
    const userData = await TransitModel.find();
    const establishment_dates = userData.map((item) => item.establishment_date);
    const transitnames = userData.map((item) => item.name);
    const start_times = userData.map(
      (item) => item.operational_time.start_time
    );
    const stop_times = userData.map((item) => item.operational_time.stop_time);
    const stop_days = userData.map((item) => item.operational_day.stop_day);
    const start_days = userData.map((item) => item.operational_day.start_day);
    const filtereddata = {
      transitdata,
      establishment_dates,
      transitnames,
      start_times,
      stop_times, stop_days , start_days
    };
    return filtereddata;
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

module.exports = {
  userretrievesingletransitModel,
  filter_user_transit_model,
};
