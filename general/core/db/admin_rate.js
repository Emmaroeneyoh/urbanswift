const mongoose = require('mongoose')
const schema = mongoose.Schema

const admin_rate_schema = new schema({
        name: {
            type:String
        },
        road_security_rating: {
            type:Number, default : 0
    },
    road_network_rating: {
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
const admin_rateModel = mongoose.model('Admin_rate', admin_rate_schema )
module.exports = {
    admin_rateModel
}