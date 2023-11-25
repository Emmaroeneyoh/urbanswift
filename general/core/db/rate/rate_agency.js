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
        
        agencyid: {
            type:  mongoose.Schema.Types.ObjectId,
             ref:'  Agency'
        },
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const rate_agenmodel = mongoose.model('rate_agenmodel', user_rate_schema )
module.exports = {
    rate_agenmodel
}