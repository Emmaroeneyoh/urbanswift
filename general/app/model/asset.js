const { AssetModel } = require("../../core/db/asset");
const { TransitModel } = require("../../core/db/transit");



const createassetModel = async (data, res) => {
    try {
      const {
        total_active_vehicle,
        total_nonactive_vehicle,
        total_coastal_buses,
        total_drivers,
        total_16_seater_buses, total_cars , low , high , transitid
      } = data;
      const form = await new AssetModel ({
        total_active_vehicle,
        total_nonactive_vehicle,
        total_coastal_buses,
        total_drivers,
        total_16_seater_buses, total_cars , ticket_sold_range : {low , high} , transitid
         
      });
     
        const userDetails = await form.save()
        
            //update transit 
            console.log(transitid)
            const updatetransit =    await TransitModel.findByIdAndUpdate(transitid, {
                 $set : {
                   asset : true
                 }
             });
     
  
      return userDetails;
    } catch (error) {
      console.log('error' , error);
      return error.message;
     
    }
};
 
const updateassetModel = async (data, res) => {
    try {
      const {
        total_active_vehicle,
        total_nonactive_vehicle,
        total_coastal_buses,
        total_drivers,
        total_16_seater_buses, total_cars , low , high , transitid , assetid
      } = data;
        const form = await AssetModel.findByIdAndUpdate(assetid, {
          $set : {
            total_active_vehicle,
            total_nonactive_vehicle,
            total_coastal_buses,
            total_drivers,
            total_16_seater_buses, total_cars , ticket_sold_range : {low , high} , transitid
             
          }
      });
     
  
   
  
      return form;
    } catch (error) {
      console.log('error' , error);
      return error.message;
     
    }
};
 
const retrievesingleassetModel = async (data, res) => {
    try {
      const {
        assetid
      } = data;
        const form = await AssetModel.findById(assetid);
      return form;
    } catch (error) {
      console.log('error' , error);
      return error.message;
     
    }
};
 
module.exports = {
    createassetModel ,  updateassetModel , retrievesingleassetModel
}