const mongoose = require('mongoose')
const schema = mongoose.Schema

const Savedtransitschema = new schema({

    transitid: {
        type:  mongoose.Schema.Types.ObjectId,
         ref:'Transit'
    },
    userid: {
        type:  mongoose.Schema.Types.ObjectId,
         ref:'User'
    },
       
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const SavedtransitModel = mongoose.model('Savedtransit', Savedtransitschema )
module.exports = {
    SavedtransitModel
}