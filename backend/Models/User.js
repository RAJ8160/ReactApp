const { type } = require('@testing-library/user-event/dist/type');
const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
});

const userModel = mongoose.model('employees',UserSchema);
module.exports = userModel;