const mongoose = require('mongoose')
const schema = mongoose.Schema

const Agencyschema = new schema({
        name: {
            type:String,
        },
        ceo:{
            type:String
        },
        headquarter:{
            type:String
        },
        establishment_date:{
            type:String , default : ''
        },
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const AgencyModel = mongoose.model('Agency', Agencyschema )
module.exports = {
    AgencyModel
}