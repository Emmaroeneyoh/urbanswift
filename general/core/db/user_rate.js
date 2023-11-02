const mongoose = require('mongoose')
const schema = mongoose.Schema

const user_rate_schema = new schema({
        road_security_rating: {
            type:Number, default : 0
        },
        estimated_destination_hours: {
            type:Number, default : 0
        },
        userid: {
            type:  mongoose.Schema.Types.ObjectId,
             ref:'User'
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
const user_rateModel = mongoose.model('User_rate', user_rate_schema )
module.exports = {
    user_rateModel
}