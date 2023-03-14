const userSchema = require('../../Models/userSchema')

exports.userBlockUnBlockPost = async(req,res) => {
    console.log("USR ID",req.query.id);
    try {
        // let {id} = req.body
         await userSchema.updateOne({_id : req.query.id},
            {$set : {Status : !Status}}
            )

        let data = await userSchema.find()
            console.log("UPDATED DATA",data);
            // let {Name,Email,Mobile,Status} = data
            // let result = {
            //     Name,
            //     Email,
            //     Mobile,
            //     Status
            // }
            
            // console.log("BLOCK UNBLOCK DATA",result);
            res.status(200).json(data)
        
    } catch (error) {
        console.log("BLOCK UNBLOCK ERROR");
        res.status(400).json("SOME ERROR",error)
    }
}