const mongoose = require('mongoose')
const schema = mongoose.Schema

const user_rate_schema = new schema({
     
    rate: {
        type:Number, default : 0
    },
       
        userid: {
            type:  mongoose.Schema.Types.ObjectId,
             ref:'User'
        },
        
        transitid: {
            type:  mongoose.Schema.Types.ObjectId,
             ref:'Transit'
        },
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const rate_transmodel = mongoose.model('rate_transit', user_rate_schema )
module.exports = {
    rate_transmodel
}