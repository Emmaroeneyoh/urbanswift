const { AgencyModel } = require("../../../general/core/db/agency");
const { rate_hourModel } = require("../../../general/core/db/rate/hour");
const { rate_networkModel } = require("../../../general/core/db/rate/network");
const { rate_agenmodel } = require("../../../general/core/db/rate/rate_agency");
const {
  rate_transmodel,
} = require("../../../general/core/db/rate/rate_transit");
const { Sub_routeModel } = require("../../../general/core/db/sub_route");
const { TransitModel } = require("../../../general/core/db/transit");
const { user_rateModel } = require("../../../general/core/db/user_rate");
const { coonectdb } = require("../../../general/core/utils");

const updatesubroutesecurityModel = async (data, res) => {
  try {
    const { road_security_rating, userid, sub_routeid } = data;

    //check if it already exist
    const checkuser = await user_rateModel.findOne({ userid, sub_routeid });
    if (!checkuser) {
      console.log("user dont esixt");
      const updateform = await new user_rateModel({
        road_security_rating,
        userid,
        sub_routeid,
      });
      await updateform.save();
      //now update the subroute
      const subroutes = await user_rateModel.find({ sub_routeid });
      const ratings = subroutes.map((item) => item.road_security_rating);
      const sum = ratings.reduce((acc, value) => acc + value, 0);
      const mean = sum / subroutes.length;
      console.log("mean", mean, sum, subroutes.length);
      const form = await Sub_routeModel.findByIdAndUpdate(sub_routeid, {
        $set: {
          road_security_rating: mean,
        },
      });
      return "done";
    }

    //    if the user has not rated before
    const form = await user_rateModel.findOneAndUpdate(
      { sub_routeid, userid },
      {
        $set: {
          road_security_rating,
        },
      }
    );
    //now update the subroute
    const subroutes = await user_rateModel.find({ sub_routeid });
    const ratings = subroutes.map((item) => item.road_security_rating);
    const sum = ratings.reduce((acc, value) => acc + value, 0);
    const mean = sum / subroutes.length;
    console.log("mean", mean);
    const updaterate = await Sub_routeModel.findByIdAndUpdate(sub_routeid, {
      $set: {
        road_security_rating: mean,
      },
    });
    return "done";
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

const updatesubroutenetworkModel = async (data, res) => {
  try {
    const { road_network_rating, userid, sub_routeid } = data;

    //check if it already exist
    const checkuser = await rate_networkModel.findOne({ userid, sub_routeid });
    if (!checkuser) {
      console.log("user dont esixt");
      const updateform = await new rate_networkModel({
        road_network_rating,
        userid,
        sub_routeid,
      });
      await updateform.save();
      //now update the subroute
      const subroutes = await rate_networkModel.find({ sub_routeid });
      const ratings = subroutes.map((item) => item.road_network_rating);
      const sum = ratings.reduce((acc, value) => acc + value, 0);
      const mean = sum / subroutes.length;
      console.log("mean", mean, sum, subroutes.length);
      const form = await Sub_routeModel.findByIdAndUpdate(sub_routeid, {
        $set: {
          road_network_rating: mean,
        },
      });
      return "done";
    }

    //    if the user has not rated before
    const form = await rate_networkModel.findOneAndUpdate(
      { sub_routeid, userid },
      {
        $set: {
          road_network_rating,
        },
      }
    );
    //now update the subroute
    const subroutes = await rate_networkModel.find({ sub_routeid });
    const ratings = subroutes.map((item) => item.road_network_rating);
    const sum = ratings.reduce((acc, value) => acc + value, 0);
    const mean = sum / subroutes.length;
    console.log("mean", mean);
    const updaterate = await Sub_routeModel.findByIdAndUpdate(sub_routeid, {
      $set: {
        road_network_rating: mean,
      },
    });
    return "done";
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

const updatesubroutehoursModel = async (data, res) => {
  try {
    const { estimated_destination_hours, userid, sub_routeid } = data;

    //check if it already exist
    const checkuser = await rate_hourModel.findOne({ userid, sub_routeid });
    if (!checkuser) {
      console.log("user dont esixt");
      const updateform = await new rate_hourModel({
        estimated_destination_hours,
        userid,
        sub_routeid,
      });
      await updateform.save();
      //now update the subroute
      const subroutes = await rate_hourModel.find({ sub_routeid });
      const ratings = subroutes.map((item) => item.estimated_destination_hours);
      const sum = ratings.reduce((acc, value) => acc + value, 0);
      const mean = sum / subroutes.length;
      console.log("mean", mean, sum, subroutes.length);
      const form = await Sub_routeModel.findByIdAndUpdate(sub_routeid, {
        $set: {
          estimated_destination_hours: mean,
        },
      });
      return "done";
    }

    //    if the user has not rated before
    const form = await rate_hourModel.findOneAndUpdate(
      { sub_routeid, userid },
      {
        $set: {
          estimated_destination_hours,
        },
      }
    );
    //now update the subroute
    const subroutes = await rate_hourModel.find({ sub_routeid });
    const ratings = subroutes.map((item) => item.estimated_destination_hours);
    const sum = ratings.reduce((acc, value) => acc + value, 0);
    const mean = sum / subroutes.length;
    console.log("mean", mean);
    const updaterate = await Sub_routeModel.findByIdAndUpdate(sub_routeid, {
      $set: {
        estimated_destination_hours: mean,
      },
    });
    return "done";
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

const ratetransitModel = async (data, res) => {
  try {
    const { rate, userid, transitid } = data;

    //check if it already exist
    const checkuser = await rate_transmodel.findOne({ userid, transitid });
    if (!checkuser) {
      console.log("user dont esixt");
      const updateform = await new rate_transmodel({
        rate,
        userid,
        transitid,
      });
      await updateform.save();
      //now update the subroute
      const subroutes = await rate_transmodel.find({ transitid });
      const ratings = subroutes.map((item) => item.rate);
      const sum = ratings.reduce((acc, value) => acc + value, 0);
      const mean = sum / subroutes.length;
      console.log("mean", mean, sum, subroutes.length);
      const form = await TransitModel.findByIdAndUpdate(transitid, {
        $set: {
          rate: mean,
        },
      });
      return "done";
    }

    //    if the user has not rated before
    const form = await rate_transmodel.findOneAndUpdate(
      { transitid, userid },
      {
        $set: {
          rate,
        },
      }
    );
    //now update the subroute
    const subroutes = await rate_transmodel.find({ transitid });
    const ratings = subroutes.map((item) => item.rate);
    const sum = ratings.reduce((acc, value) => acc + value, 0);
    const mean = sum / subroutes.length;
    console.log("mean", mean);
    const updaterate = await TransitModel.findByIdAndUpdate(transitid, {
      $set: {
        rate: mean,
      },
    });
    return "done";
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};
const rateagencyModel = async (data, res) => {
  try {
    const { rate, userid, agencyid } = data;

    //check if it already exist
    const checkuser = await rate_agenmodel.findOne({ userid, agencyid });
    if (!checkuser) {
      console.log("user dont esixt");
      const updateform = await new rate_agenmodel({
        rate,
        userid,
        agencyid,
      });
      await updateform.save();
      //now update the subroute
      const subroutes = await rate_agenmodel.find({ agencyid });
      const ratings = subroutes.map((item) => item.rate);
      const sum = ratings.reduce((acc, value) => acc + value, 0);
      const mean = sum / subroutes.length;
      console.log("mean", mean, sum, subroutes.length);
      const form = await AgencyModel.findByIdAndUpdate(agencyid, {
        $set: {
          rate: mean,
        },
      });
      return "done";
    }

    //    if the user has not rated before
    const form = await rate_agenmodel.findOneAndUpdate(
      { agencyid, userid },
      {
        $set: {
          rate,
        },
      }
    );
    //now update the subroute
    const subroutes = await rate_agenmodel.find({ agencyid });
    const ratings = subroutes.map((item) => item.rate);
    const sum = ratings.reduce((acc, value) => acc + value, 0);
    const mean = sum / subroutes.length;
    console.log("mean", mean);
    const updaterate = await AgencyModel.findByIdAndUpdate(agencyid, {
      $set: {
        rate: mean,
      },
    });
    return "done";
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

module.exports = {
  updatesubroutesecurityModel,
  updatesubroutenetworkModel,
  updatesubroutehoursModel,
  ratetransitModel, rateagencyModel
};
