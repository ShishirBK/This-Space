const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        await mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
        console.log('connection successful')
    }
    catch(err){
        process.exit(1)
    }
}

module.exports = connectDB