const mongoose = require('mongoose')
const schema = mongoose.Schema

const Routeschema = new schema({
        route_destination: {
            type:String, 
        },
        
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const RouteModel = mongoose.model('Route', Routeschema )
module.exports = {
    RouteModel
}