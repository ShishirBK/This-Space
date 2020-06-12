const User = require('../models/User')

exports.updateUser = async (req, res) => {
    try{
    const id = req.body._id
    const user = await User.findOneAndUpdate({_id:id},req.body)

    res.status(200).json({
        data: user
    })
    }
    catch(errors){
        res.status(500).json(errors)
    };
}
