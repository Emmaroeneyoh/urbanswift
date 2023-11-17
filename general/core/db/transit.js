const mongoose = require('mongoose')
const schema = mongoose.Schema


const Transitschema = new schema({
        name: {
            type:String,
        },
        phone: {
            type:String,
        },
        asset: {
            type:Boolean, default : false
    },
    ownership: {
        type:String,
    },
        address:{
            type:String
        },
        latitude:{
            type:String
        },
        longitude:{
            type:String
        },
        establishment_date:{ type:String
        },
       
            operational_time: {
            start_time:{
                type:String
            },
            stop_time:{
                type:String
            },
        },
            operational_day: {
            start_day:{
                type:String
            },
            stop_day:{
                type:String
            },
        },
        
       
    agency: {
        default: [],
        type: [
          {
            agencyid: {
            type:  mongoose.Schema.Types.ObjectId,
             ref:'Agency'
    },
          },
        ],
      },
    image: {
        default: [],
        type: [
          {
            url: {
              type: String,
            },
          },
        ],
      },
    createdAt : {
        type: Date,
        default:Date.now
    }
})
Transitschema.index({name: 'text'});
const TransitModel = mongoose.model('Transit', Transitschema )
module.exports = {
    TransitModel
}