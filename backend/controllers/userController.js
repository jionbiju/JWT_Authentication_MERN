import userModel from "../models/userModel.js";
import bcrypt from 'bcryptjs';
import createToken from "../utils/createToken.js";

export const createUser = async (req,res) => {
    try{
    const {username,email,password} = req.body;
    if(!username || !email || !password){
        return res.status(400).send("Please fill all the fields.");
    }
    const userExist = await userModel.findOne({email});
    if(userExist){
        return res.status(400).json({
            message:"User with this email already exists."
        })
    }

    //Password hashing
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    //Create User
    const newUser = new userModel({
        username:username.trim(),
        email:email.trim().toLowerCase(),
        password:hashedPassword
    });

    //Save User to DataBase
    const savedData = await newUser.save();
    createToken(res,newUser._id);
    return res.status(201).json({
        message:"User created successfully",
        user:{
            userid:newUser._id,
            username:newUser.username,
            email:newUser.email
        }
    });
    }
    catch(error){
        console.log("Error in craeteUser:",error);
        res.status(500).json({
            error:error.message
        })
    }
}


export const loginUser = async (req,res) => {
    try{
    const {email,password} =req.body;
    const user = await userModel.findOne({email});
    if(user && ( await bcrypt.compare(password,user.password))){
        createToken(res,user._id);
        return res.status(200).json({
            id:user._id,
            username:user.username,
            email:user.email
        })
    }
    return res.status(400).send("Invalid Credentials.");
    }
    catch(err){
        console.log("Error in loginUser:",err);
        res.status(500).json({
            error:err.message
        })
    }
}

export const logoutUser = async (req,res) => {
    res.cookie("jwt","",{
        httpOnly:true,
        expires:Date(0)
    })
    return res.status(200).json({message:"Logged Out Successfully"})
}

export const userProfile = async (req,res) => {
    try {
        const user = await userModel.findById(req.user._id);
        if(user){
            return res.status(200).json({
                _id:user._id,
                email:user.email,
                username:user.username
            });
        }
        return res.status(404).send("User not found.");
    } catch (error) {
        console.log("Error userProfile:",error);
        res.status(500).json({
            errorMessage:error.message
        })
        
    }
}
