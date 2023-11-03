const { admin_rateModel } = require("../../../general/core/db/admin_rate");
const { Route_rateModel } = require("../../../general/core/db/route_rate");
const { rate_function } = require("../../../general/core/utils");
const { handleError } = require("../../core/utils");
const { admincreatenetworkrateModel, adminupdatenetworkrateModel } = require("../model/adminrate");


const admincreatenetworkratingController = async (req, res, next) => {
    const { sub_routeid, routeid, name, road_network_rating } = req.body;
    const driver =  name.toLowerCase()
    try {
        const checkdriver = await admin_rateModel.findOne({ sub_routeid, routeid, name: driver })
        if ( checkdriver && checkdriver.road_network_rating == 0 || !checkdriver) {
            const createdata = {sub_routeid, routeid, driver, road_network_rating }
             let createrate = await admincreatenetworkrateModel(createdata, res);
            return res.status(200).json({
                status_code: 200,
                status : true,
                message: "login process successful",
                data: createrate,
              });
        } else  if ( checkdriver && checkdriver.road_network_rating != 0 ){
            const updatedata = {sub_routeid, routeid, driver, road_network_rating }
            let updaterate = await adminupdatenetworkrateModel(updatedata, res);
            return res.status(200).json({
                status_code: 200,
                status : true,
                message: "login process successful",
                data: updaterate,
              });
        }
        // const ratedata = await Route_rateModel.find({ sub_routeid }).select("road_network_rating")
        // rate_function(sub_routeid , ratedata , 'network' , 'admin' , next)
        
       
    } catch (error) {
      console.log(error);
      handleError(error.message)(res);
    }
};
  
module.exports = {
    admincreatenetworkratingController
}