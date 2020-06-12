const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    useraddress:{
        type:String
    },
    status:{
        type:Boolean
    }
});

module.exports = mongoose.model('user',UserSchema)