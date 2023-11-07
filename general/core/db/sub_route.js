const mongoose = require('mongoose')
const schema = mongoose.Schema

const sub_routeschema = new schema({
       main_drive_through: {
            type:String,
        },
       description: {
            type:String,
        },
      
        routeid: {
            type:  mongoose.Schema.Types.ObjectId,
             ref:'Route'
    },
    road_network_rating: {
        type:Number, default : 0
    },
    road_security_rating: {
        type:Number, default : 0
    },
    estimated_destination_hours: {
        type:Number, default : 0
    },
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const Sub_routeModel = mongoose.model('Sub_route', sub_routeschema )
module.exports = {
    Sub_routeModel
}