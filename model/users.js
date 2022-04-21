const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const Schema = mongoose.Schema

// Schema
const usersSchema = new Schema({
    username:{type:String,required:[true,'username不能为空']},
    sex: {type:String,enum:['man','woman'],required:[true,'sex不能为空']},
    age: {type:Number,required:[true,'age不能为空']},
})

// Model
const users = mongoose.model('users',usersSchema)

module.exports = users