const { AgencyModel } = require("../../../general/core/db/agency");
const { TransitModel } = require("../../../general/core/db/transit");



const userretrievesingleagencyModel = async (data, res) => {
    try {
        const { agencyid } = data;
        const agency = await AgencyModel.findById(agencyid);
        const transit = await TransitModel.find({ 'agency.agencyid' : agencyid })
       
        const info = { transit , agency}
      return info;
    } catch (error) {
      console.log("error", error);
      return error.message;
    }
};

const filter_user_agency_model = async (datas, res) => {
    try {
      const  {query } = datas;
   
        
      if (query.$and.length == 0) {
        const userData = await AgencyModel.find()
          return userData;
      }
      const userData = await AgencyModel
      .find(query)
     
    
    return userData;
    } catch (error) {
      console.log(error);
      handleError(error.message)(res);
    }
  };
  
module.exports = {
    userretrievesingleagencyModel , filter_user_agency_model
}