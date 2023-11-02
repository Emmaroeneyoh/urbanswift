const mongoose = require('mongoose')
const schema = mongoose.Schema


const Assetschema = new schema({
        total_active_vehicle: {
            type:Number, default : 0
        },
        total_nonactive_vehicle: {
            type:Number, default : 0
        },
        total_coastal_buses: {
            type:Number, default : 0
        },
        total_drivers: {
            type:Number, default : 0
        },
        total_16_seater_buses: {
            type:Number, default : 0
        },
        total_cars: {
            type:Number, default : 0
        },
       
        
            ticket_sold_range: {
            low:{
                type:Number , default : 0
            },
            high:{
                type:Number , default : 0
            },
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
const AssetModel = mongoose.model('Asset', Assetschema )
module.exports = {
    AssetModel
}