const mongoose = require('mongoose')
// const User = require('./model').Model

const hospitalSchema = new mongoose.Schema({
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
    education:{
        type:String
    },
  
    language : {
        type:[String], 
        default: "nepali"
    },
    skills:{
        type:[String], 
        default: undefined
    }
})


const Model = mongoose.model('Hospital',hospitalSchema)

module.exports = {
    Model
}