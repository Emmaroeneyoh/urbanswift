const { AgencyModel } = require("../../../general/core/db/agency");
const { RouteModel } = require("../../../general/core/db/route");
const { TransitModel } = require("../../../general/core/db/transit");


const landingpageModel = async (data, res) => {
    try {
    
        const transits = await TransitModel.find().limit(6)
        const agency = await AgencyModel.find().limit(6)
        const route = await RouteModel.find().limit(10)

        const landingpage = {transits , agency , route}
      return landingpage;
    } catch (error) {
      console.log('error' , error);
      return error.message;
     
    }
};

module.exports = {
    landingpageModel
}