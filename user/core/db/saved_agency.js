const mongoose = require('mongoose')
const schema = mongoose.Schema

const Savedagencyschema = new schema({

    agencyid: {
        type:  mongoose.Schema.Types.ObjectId,
         ref:'Agency'
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
const SavedagencyModel = mongoose.model('Savedagency', Savedagencyschema )
module.exports = {
    SavedagencyModel
}