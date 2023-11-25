const mongoose = require('mongoose')
const schema = mongoose.Schema


const Agencyschema = new schema({
        name: {
            type:String,
    },
    ownership: {
        type:String,
    },
    rate: {
        type:Number, default : 0
    },
        ceo:{
            type:String
        },
        image:{
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
Agencyschema.index({name: 'text'});
const AgencyModel = mongoose.model('Agency', Agencyschema )
module.exports = {
    AgencyModel
}