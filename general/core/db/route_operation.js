const mongoose = require('mongoose')
const schema = mongoose.Schema

const Operationschema = new schema({
        car_price: {
            type:Number, default : 0
        },
        seater_16_price: {
            type:Number, default : 0
        },
        coaster_price: {
            type:Number, default : 0
        },
            
        transitid: {
            type:  mongoose.Schema.Types.ObjectId,
             ref:'Transit'
        },
        routeid: {
            type:  mongoose.Schema.Types.ObjectId,
             ref:'Route'
        },
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const OperationModel = mongoose.model('Operation', Operationschema )
module.exports = {
    OperationModel
}