const User = require('../models/User')

exports.createUser = async (req, res) => {

    const {firstname, lastname, useraddress, status} = req.body
    console.log(req.body)
    try{
        const user = new User({
            firstname,
            lastname,
            useraddress,
            status
        })
        await user.save()
        res.status(200).json({
            data: user
        })
    }
    catch(errors){
        res.status(500).json({errors})
    }  
}