const { RouteModel } = require("../../core/db/route");



const createrouteModel = async (data, res) => {
    try {
      const {
        routename
      } = data;
      const form = await new RouteModel ({
          route_destination : routename
         
      });
     
      const userDetails = await form.save()
     
  
      return userDetails;
    } catch (error) {
      console.log('error' , error);
      return error.message;
     
    }
};
 

const updaterouteModel = async (data, res) => {
    try {
      const {
        routename , routeid
      } = data;
        const form = await RouteModel.findByIdAndUpdate(routeid, {
            $set: {
                route_destination: routename 
          }
      })
      return form;
    } catch (error) {
      console.log('error' , error);
      return error.message;
     
    }
};
  
const retrievesinglerouteModel = async (data, res) => {
    try {
      const {
      routeid
      } = data;
      const form = await RouteModel.findById(routeid)
      return form;
    } catch (error) {
      console.log('error' , error);
      return error.message;
     
    }
};

module.exports = {
    createrouteModel ,  updaterouteModel , retrievesinglerouteModel
}