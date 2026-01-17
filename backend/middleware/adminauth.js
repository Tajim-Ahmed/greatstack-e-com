import express from "express";
import jwt from 'jsonwebtoken'

const adminauth = async (req,res,next) =>{
    try {
        const {token} = req.headers
        console.log(token)
        if(!token){
            return res.json({success:false,message:"not authorized"})
        }
        const token_decode = jwt.verify(token,process.env.JWT_SECRET)
        
        if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
           return res.json({success:false,message:"not authorized"})
        }
        next()
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}
export default adminauth