const User = require('../models/User')

exports.deleteUser = async (req, res) => {
    try{
        const user = await User.findOneAndUpdate({_id:req.body.id},{status:false})

        res.status(200).json({
            data: user
        })
    }
    catch(errors){
        res.status(500).json({errors})
    }  
}