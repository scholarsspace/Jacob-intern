const mongoose = require('mongoose')
// const User = require('./model').Model

const aboutSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is required']

    },
    // user: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     // required: [true, 'Review must belong to a user']
    //   }],
    email:{
        type:String,
        required:[true,"email is required"]
    },
    address:{
        type:String,
        required:[true,"address is required"]
    },
    image:{
        type:String
    },
    story:{
        type:String
    }
})


const Model = mongoose.model('About',aboutSchema)

module.exports = {
    Model
}