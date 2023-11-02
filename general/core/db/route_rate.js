const mongoose = require('mongoose')
const schema = mongoose.Schema

const route_rate_schema = new schema({
        road_network_rating: {
            type:Number, default : 0
        },
        road_security_rating: {
            type:Number, default : 0
        },
        estimated_destination_hours: {
            type:Number, default : 0
        },
        routeid: {
            type:  mongoose.Schema.Types.ObjectId,
             ref:'Route'
        },
        sub_routeid: {
            type:  mongoose.Schema.Types.ObjectId,
             ref:'Sub_route'
        },
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const Route_rateModel = mongoose.model('Route_rate', route_rate_schema )
module.exports = {
    Route_rateModel
}