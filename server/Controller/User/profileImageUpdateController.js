const userSchema = require('../../Models/userSchema')

exports.profileImageUploadPost = async(req,res) => {
    console.log("IMAGE",req.body);
    try {
        userSchema.updateOne({_id : req.body.id},
            {
                $set : {ProfileImage : req.body.ProfileImage}
            }).then((result) => {
                console.log("RESULT",result);
            })
    } catch (error) {
        console.log("ERROR",error);
    }
}