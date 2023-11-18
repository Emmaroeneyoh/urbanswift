const { AgencyModel } = require("../../core/db/agency");
const { RouteModel } = require("../../core/db/route");
const { Sub_routeModel } = require("../../core/db/sub_route");
const { TransitModel } = require("../../core/db/transit");


const dashboardModel = async (data, res) => {
    try {
     
        const transit = await TransitModel.find()
        const totaltransit = await TransitModel.countDocuments()
        const totalagencies = await AgencyModel.countDocuments()
        const totalroutes = await RouteModel.countDocuments()
        const totalsubroutes = await Sub_routeModel.countDocuments()
        console.log('transit', totaltransit)
       let bardata = []
        transit.map((x) => {
            const totalagency = x.agency.length
            const transitname = x.name
            const data = { transitname, totalagency }
            bardata.push(data)
        })
      const dashboarddata = {totalroutes , totaltransit , totalagencies , totalsubroutes , bardata}
      return dashboarddata;
    } catch (error) {
      console.log('error' , error);
      return error.message;
     
    }
};
 
module.exports = {
    dashboardModel
}