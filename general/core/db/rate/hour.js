const mongoose = require('mongoose')
const schema = mongoose.Schema

const user_rate_schema = new schema({
     
    estimated_destination_hours: {
        type:Number, default : 0
    },
       
        userid: {
            type:  mongoose.Schema.Types.ObjectId,
             ref:'User'
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
const rate_hourModel = mongoose.model('rate_hour', user_rate_schema )
module.exports = {
    rate_hourModel
}