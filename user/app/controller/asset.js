const { handleError } = require("../../core/utils");
const { filter_user_asset_model } = require("../model/asset");

const user_filter_asset_controller = async (req, res, next) => {
  try {
    const {
      low_total_active_vehicle,
      high_total_active_vehicle,
      low_total_nonactive_vehicle,
      high_total_nonactive_vehicle,
      low_total_coastal_buses,
      high_total_coastal_buses,
      low_total_drivers,
      high_total_drivers,
      low_total_16_seater_buses,
      high_total_16_seater_buses,
      low_total_cars,
      high_total_cars,
        transitid, low_ticket, high_ticket
    } = req.body;
    var query = { $and: [] };

    if (transitid != "") {
      query.$and.push({ transitid: transitid });
    }
    if (low_total_active_vehicle != 0) {
        query.$and.push({ total_active_vehicle: { $gte: low_total_active_vehicle } });
      }
    if (high_total_active_vehicle != 0) {
        query.$and.push({ total_active_vehicle: { $lte: high_total_active_vehicle } });
      }
      if (low_total_nonactive_vehicle != 0) {
        query.$and.push({ total_nonactive_vehicle: { $gte: low_total_nonactive_vehicle } });
      }
      if (high_total_nonactive_vehicle != 0) {
        query.$and.push({ total_nonactive_vehicle: { $lte: high_total_nonactive_vehicle } });
      }
      if (low_total_coastal_buses != 0) {
        query.$and.push({ total_coastal_buses: { $gte: low_total_coastal_buses } });
      }
      if (high_total_coastal_buses != 0) {
        query.$and.push({ total_coastal_buses: { $lte: high_total_coastal_buses } });
      }
      if (low_total_drivers != 0) {
        query.$and.push({ total_drivers: { $gte: low_total_drivers } });
      }
      if (high_total_drivers != 0) {
        query.$and.push({ total_drivers: { $lte: high_total_drivers } });
      }
      if (low_total_16_seater_buses != 0) {
        query.$and.push({ total_16_seater_buses: { $gte: low_total_16_seater_buses } });
      }
      if (high_total_16_seater_buses != 0) {
        query.$and.push({ total_16_seater_buses: { $lte: high_total_16_seater_buses } });
      }
      if (low_total_cars != 0) {
        query.$and.push({ total_cars: { $gte: low_total_cars } });
      }
      if (high_total_cars != 0) {
        query.$and.push({ total_cars: { $lte: high_total_cars } });
      }
      if (low_ticket != 0) {
        query.$and.push({ 'ticket_sold_range.low': { $gte: low_ticket } });
      }
      if (high_ticket != 0) {
        query.$and.push({ 'ticket_sold_range.high': { $lte: high_ticket } });
      }
    console.log("this is query", query);
    const timerange = { query };

    let trainee = await filter_user_asset_model(timerange, res);

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "all users logs retrieved",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};


module.exports = {
    user_filter_asset_controller
}