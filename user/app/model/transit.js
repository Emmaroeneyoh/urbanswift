const { AgencyModel } = require("../../../general/core/db/agency");
const { AssetModel } = require("../../../general/core/db/asset");
const { OperationModel } = require("../../../general/core/db/route_operation");
const { TransitModel } = require("../../../general/core/db/transit");


const userretrievesingletransitModel = async (data, res) => {
    try {
      const { transitid } = data;
        const transit = await TransitModel.findById(transitid);
        const asset = await AssetModel.findOne({ transitid })
        const operation = await OperationModel.find({transitid}).populate({
            path: "routeid",
            select: "route_destination",
          })
        const agency = await AgencyModel.find({transitid}).populate({
            path: "agencyid",
            select: "name",
        })
        const info = { transit , asset , operation , agency}
      return info;
    } catch (error) {
      console.log("error", error);
      return error.message;
    }
};

const filter_user_transit_model = async (datas, res) => {
    try {
      const  {query } = datas;
   
      const userData = await TransitModel
      .find(query)
     
    
    return userData;
    } catch (error) {
      console.log(error);
      handleError(error.message)(res);
    }
  };
  
module.exports = {
    userretrievesingletransitModel , filter_user_transit_model
}