const vehicleSchema = require('../../../Models/vehicleSchema')

exports.addVehicle = async(req,res) => {
    console.log("VEHICLE",req.body);
  try {
    vehicleSchema.create(req.body).then((data) => {
        res.status(200).json(data)
    })
  } catch (error) {
    res.status(400).json("Error Occured")
  }
}