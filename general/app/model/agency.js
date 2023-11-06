const { AgencyModel } = require("../../core/db/agency");



const createAgencyModel = async (data, res) => {
    try {
      const {
        ceo , establishment_date , headquarter  , agencyname , ownership
      } = data;
      const form = await new AgencyModel ({
          name: agencyname ,   ceo , establishment_date , headquarter  , ownership
         
      });
     
      const userDetails = await form.save()
     
  
      return userDetails;
    } catch (error) {
      console.log('error' , error);
      return error.message;
     
    }
};
 

const updateAgencyModel = async (data, res) => {
    try {
      const {
        ceo , establishment_date , headquarter  , agencyname , agencyid , ownership
      } = data;
        const form = await AgencyModel.findByIdAndUpdate(agencyid, {
            $set: {
                name: agencyname ,   ceo , establishment_date , headquarter  , ownership 
          }
      })
      return form;
    } catch (error) {
      console.log('error' , error);
      return error.message;
     
    }
};
  
const retrievesingleAgencyModel = async (data, res) => {
    try {
      const {
      agencyid
      } = data;
      const form = await AgencyModel.findById(agencyid)
      return form;
    } catch (error) {
      console.log('error' , error);
      return error.message;
     
    }
};
  
module.exports = {
    createAgencyModel , retrievesingleAgencyModel , updateAgencyModel
}