const mongoose = require('mongoose')
const schema = mongoose.Schema

const Savedsubrouteschema = new schema({

    subrouteid: {
        type:  mongoose.Schema.Types.ObjectId,
         ref:'Sub_route'
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
const SavedsubrouteModel = mongoose.model('Savedsubroute', Savedsubrouteschema )
module.exports = {
    SavedsubrouteModel
}