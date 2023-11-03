const { admin_rateModel } = require("../../../general/core/db/admin_rate");
const { rate_network_function } = require("../../../general/core/rate/network");

const admincreatenetworkrateModel = async (data, res) => {
    try {
      const {
        sub_routeid, routeid, driver, road_network_rating
        } = data;
        

      const form = await new admin_rateModel ({
        sub_routeid, routeid,name: driver, road_network_rating
      });
     
        const userDetails = await form.save()
        rate_network_function(sub_routeid , routeid)
      
      return userDetails;
    } catch (error) {
      console.log('error' , error);
      return error.message;
     
    }
};
  
const adminupdatenetworkrateModel = async (data, res) => {
    try {
      const {
        sub_routeid, routeid, driver, road_network_rating
      } = data;
        const form = await admin_rateModel.findOneAndUpdate({sub_routeid , name:driver , routeid}, {
          $set : {
         road_network_rating
             
          }
      });
     
     rate_network_function(sub_routeid , routeid)
  
      return form;
    } catch (error) {
      console.log('error' , error);
      return error.message;
     
    }
};
 
module.exports = {
    admincreatenetworkrateModel , adminupdatenetworkrateModel
}