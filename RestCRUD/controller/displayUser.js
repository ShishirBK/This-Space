const User = require('../models/User')

exports.displayUser = async (req, res) => {
    try{
    const user = await User.find({status:true})
    res.status(200).json({
        data: user
    })
}
catch(errors){
    res.status(500).json(errors)
}
}