import jwt from 'jsonwebtoken';
import userModel from '../models/userModel';

const protect = async (req,res,next) => {
    try {
        const token = req.cookies.jwt;
        const decode = await jwt.verify(token,process.env.JWT_SECRET);
        req.user=await userModel.findById(decode.userId).select("-password");
        next();

    } catch (error) {
        console.log(error.message);
        res.status(401).json({
            error:"Not authorized,token not valid."
        })
        
    }
}
export {protect};