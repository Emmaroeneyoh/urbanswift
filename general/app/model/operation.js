const { OperationModel } = require("../../core/db/route_operation");


const createoperationModel = async (data, res) => {
    try {
      const {
        car_price , seater_16_price , coaster_price ,  transitid , routeid 
      } = data;
      const form = await new OperationModel ({
        car_price , seater_16_price , coaster_price ,  transitid , routeid 
         
      });
     
      const userDetails = await form.save()
     
  
      return userDetails;
    } catch (error) {
      console.log('error' , error);
      return error.message;
     
    }
};
const retrievesingleoperationModel = async (data, res) => {
    try {
      const {
       operationid 
      } = data;
      const form = await OperationModel.findById(operationid);
      return form;
    } catch (error) {
      console.log('error' , error);
      return error.message;
     
    }
};

const updateoperationModel = async (data, res) => {
    try {
      const {
        car_price,
        seater_16_price,
        coaster_price,
        transitid,
        routeid,
        operationid,
      } = data;
        const form = await OperationModel.findByIdAndUpdate(operationid, {
          $set : {
            car_price,
            seater_16_price,
            coaster_price,
            transitid,
            routeid,
             
          }
        });
  
      return form;
    } catch (error) {
      console.log('error' , error);
      return error.message;
     
    }
};
 

module.exports = {
    createoperationModel , updateoperationModel , retrievesingleoperationModel
}