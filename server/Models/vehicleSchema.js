const mongoose = require('mongoose')

const vehicleSchema = mongoose.Schema({
    OwnerName : {type : String , required : true},
    vehicleName : {type : String , required : true},
    vehicleModel : {type : String , required : true},
    Brand : {type : String , required : true},
    EngineNo : {type : String , required : true},
    Color : {type : String , required : true},
    Fuel : {type : String , required : true},
    Description : {type : String , required : true},
    Price : {type : Number , required : true},
    Image1 : {type : String , required : true},
    Image2 : {type : String , required : true},
    Image3 : {type : String , required : true},
    Image4: {type : String , required : true}
})

const model = mongoose.model("Vehicles",vehicleSchema)

module.exports = model