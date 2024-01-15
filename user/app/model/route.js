const { AgencyModel } = require("../../../general/core/db/agency");
const { AssetModel } = require("../../../general/core/db/asset");
const { OperationModel } = require("../../../general/core/db/route_operation");
const { Sub_routeModel } = require("../../../general/core/db/sub_route");
const { TransitModel } = require("../../../general/core/db/transit");
const { handleError } = require("../../core/utils");


const userretrievesinglerouteModel = async (data, res) => {
    try {
      const { routeid } = data;
        const subroute = await Sub_routeModel.find({routeid});
        const operation = await OperationModel.find({routeid}).populate({
            path: "transitid",
            select: "name address",
        })
        const info = { subroute , operation }
      return info;
    } catch (error) {
      console.log("error", error);
      return error.message;
    }
};

const filter_user_operation_model = async (datas, res) => {
    try {
        const { query } = datas;
        
        if (query.$and.length == 0) {
            const userData = await OperationModel.find().populate({
              path: "transitid",
              select: "name address latitude longitude",
          })
              return userData;
          }
   
      const userData = await OperationModel
      .find(query).populate({
        path: "transitid",
        select: "name address latitude longitude",
    })
     
    
    return userData;
    } catch (error) {
      console.log(error);
      handleError(error.message)(res);
    }
  };
  
module.exports = {
    userretrievesinglerouteModel , filter_user_operation_model
}