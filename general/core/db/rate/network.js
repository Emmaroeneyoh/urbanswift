const mongoose = require('mongoose')
const schema = mongoose.Schema

const user_rate_schema = new schema({
     
        road_network_rating: {
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
const rate_networkModel = mongoose.model('rate_network', user_rate_schema )
module.exports = {
    rate_networkModel
}