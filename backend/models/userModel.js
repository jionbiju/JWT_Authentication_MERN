import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        requied:true
    }
},
{
    timestamps:true
})

const userModel = mongoose.model('userModel',userSchema);

export default userModel;