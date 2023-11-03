const { admin_rateModel } = require("../db/admin_rate");
const { Route_rateModel } = require("../db/route_rate");
const { user_rateModel } = require("../db/user_rate");

const rate_network_function = async (subrouteid, routeid) => {
  admindata = await admin_rateModel.find({ sub_routeid: subrouteid });
  let accumulatedAdminValue = 0;
  let accumulatedAdminLength = 0;
  let accumulatedUserValue = 0;
  let accumulatedUserLength = 0;

  for (let i = 0; i < admindata.length; i++) {
    if (admindata[i].road_network_rating != 0) {
      accumulatedAdminValue += admindata[i].road_network_rating;
      accumulatedAdminLength++;
    }
  }
  console.log(
    " admin total rate :",
    accumulatedAdminValue,
    " admin persons :",
    accumulatedAdminLength
  );
  userdata = await user_rateModel.find({ sub_routeid: subrouteid });
  for (let i = 0; i < userdata.length; i++) {
    if (userdata[i].road_network_rating != 0) {
      accumulatedUserValue += userdata[i].road_network_rating;
      accumulatedUserLength++;
    }
  }
  console.log(
    "user total rate :",
    accumulatedUserValue,
    " user persons :",
    accumulatedUserLength
  );

  const totalvalue = accumulatedAdminValue + accumulatedUserValue;
  const totallength = accumulatedAdminLength + accumulatedUserLength;
  const result = totalvalue / totallength;

  console.log("result", result);
  const checkrate = await Route_rateModel.findOne({ sub_routeid: subrouteid });
  if ((checkrate && checkrate.road_network_rating == 0) || !checkrate) {
    const form = await new Route_rateModel({
      sub_routeid: subrouteid,
      routeid,
      road_network_rating: result,
    });

    const userDetails = await form.save();
  } else if (checkrate && checkrate.road_network_rating != 0) {
    const form = await admin_rateModel.findOneAndUpdate(
      { sub_routeid: subrouteid, routeid },
      {
        $set: {
          road_network_rating : result,
        },
      }
    );
  }

  const updaterate = await Route_rateModel.findByIdAndUpdate(subrouteid, {
    $set: {
      road_network_rating: result,
    },
  });

  return "done";
};

module.exports = {
  rate_network_function,
};
