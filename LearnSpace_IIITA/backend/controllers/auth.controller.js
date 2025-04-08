

import {User} from '../models/user.model.js';
import bcryptjs from "bcryptjs";
import crypto from "crypto";
import { generateTokenAndSetCookie } from '../utils/generateTokenAndCookie.js';
import { sendVerificationEmail } from '../mailtrap/emails.js';
import {sendPasswordResetEmail} from '../mailtrap/emails.js';
import { sendWelcomeEmail } from '../mailtrap/emails.js';
import {sendResetSuccessEmail} from "../mailtrap/emails.js";


export const signup =async(req,res)=>{

    const {email,password,name}=req.body;

    try{
       if(!email || !password || !name){
           throw new Error("All fields are required");
       }
       const userAlreadyExists=await User.findOne({email});
       console.log("userAlreadyExists",userAlreadyExists);
       if(userAlreadyExists){
        return res.status(400).json({ success:false,message:"User already exists"});
       }
       const hashedPassword =await bcryptjs.hash(password,10);
       const verificationToken=Math.floor(100000 + Math.random()*900000).toString();
       const user=new User({
        email,
        password:hashedPassword,
        name,
        verificationToken,
        verificationTokenExpiresAt:Date.now()+24*60*60*1000
       })

       await user.save();

    //    jwt

    generateTokenAndSetCookie(res,user._id);

  await sendVerificationEmail(user.email,verificationToken);

  
    res.status(201).json({
        success:true,
        message:"User created successfully",
        user:{
            ...user._doc,
            password:undefined,
        }
    })
    } catch (error){
        res.status(400).json({success:false,message:error.message});
    }

};


export const verifyEmail=async(req,res)=>{
    const {code}=req.body;
    try{
        const user=await User.findOne({
            verificationToken:code,
            verificationTokenExpiresAt:{$gt:Date.now()}
        })
        if(!user){
            return res.status(400).json({success:false,message:"Invalid or expired verification code"})
        }
        user.isVerified=true;
        user.verificationToken=undefined;
        user.verificationTokenExpiresAt=undefined;
        await user.save();

        await sendWelcomeEmail(user.email,user.name);

        res.status(200).json({
                success:true,
                message:"Email verified successfully",
                user:{
                ...user._doc,
                password:undefined,
                }
              })
    } catch(error){
        console.log("error in verifyEmail",error);
        res.status(500).json({success:false,message:"server error"});
    }
}


export const login =async(req,res)=>{
    const {email,password}=req.body;
    try{
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({success:false,message:"Invalid Credentials"});
        }
        const isPasswordValid=await bcryptjs.compare(password,user.password);
        if(!isPasswordValid){
            return res.status(400).json({success:false,message:"Invalid credentials"});
        }
        generateTokenAndSetCookie(res,user._id);

        user.lastLogin=new Date();
        await user.save();

        res.status(200).json({
            success:true,
            message:"Logged in successfully",
            user:{
                ...user._doc,
                password:undefined,
            },
        });

    } catch (error){
        console.log("Error in login",error);
        res.status(400).json({success:false,message:error.message});
    }
}


export const logout =async(req,res)=>{
    res.clearCookie("token");
    res.status(200).json({success:true,message:"Logged out successfully"});
}


export const forgotPassword=async (req,res)=>{
    const {email}=req.body;
    try{
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({success:false,message:"User not found"});
        }
        const resetToken=crypto.randomBytes(20).toString("hex");
        const resetTokenExpiresAt=Date.now()+1*60*60*1000;

        user.resetPasswordToken=resetToken;
        user.resetPasswordExpiresAt=resetTokenExpiresAt;

        await user.save();

        // send email
        await sendPasswordResetEmail(user.email,`${process.env.CLIENT_URL}/reset-password/${resetToken}`);
        res.status(200).json({success:true,message:"Password reset link sent to your email"});

    } catch (error){
        console.log("Error in forgotPassword",error);
        res.status(400).json({success:false,message:error.message});
    }
}



export const resetPassword=async (req,res)=>{
    try{
        const {token}=req.params;
        const {password}=req.body;

        const user=await User.findOne({
            resetPasswordToken:token,
            resetPasswordExpiresAt:{$gt:Date.now()},
        });
        if(!user){
            return res.status(400).json({success:false,message:"Invalid or expired reset token"});
        }
        // update password
        const hashedPassword=await bcryptjs.hash(password,10);
        user.password=hashedPassword;
        user.resetPasswordToken=undefined;
        user.resetTokenExpiresAt=undefined;

        await user.save();
        
        await sendResetSuccessEmail(user.email);
        res.status(200).json({success:true,message:"Password reset successfully"});


    } catch (error){
        console.log("Error is resetPassword",error);
        res.status(400).json({success:false,message:error.message});
    }
}

export const checkAuth=async (req,res)=>{
    try{
        const user=await User.findById(req.userId).select("-password");
        if(!user){
            return res.status(400).json({success:false,message:"User not found"});
        }
        res.status(200).json({success:true,user});
    } catch (error){
        console.log("Error in checkAuth",error);
        res.status(400).json({success:false,message:error.message});
    }
}

/// Profile update controller
export const updateProfile = async (req, res) => {
    const userId = req.userId;
    const { name, ...additionalFields } = req.body;

    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(400).json({ success: false, message: 'User not found' });
        }

        if (name) {
            user.name = name;
        }
        if (req.file) {
            user.profileImage = `/uploads/profile-pictures/${req.file.filename}`;
        }

        for (const [key, value] of Object.entries(additionalFields)) {
            user.additionalFields.set(key, value);
        }

        await user.save();
        res.status(200).json({ success: true, message: 'Profile updated successfully', user });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
// Get profile controller for viewing profile
export const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.userId).select('-password');
        if (!user) {
            return res.status(400).json({ success: false, message: 'User not found' });
        }
        res.status(200).json({ success: true, user });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};






// changes


export const login = async (req, res) => {
    const { adminName, password } = req.body;

    // Predefined admin credentials
    const ADMIN_NAME = "admin";
    const ADMIN_PASSWORD = "admin123";

    try {
        // Check if credentials match
        if (adminName !== ADMIN_NAME || password !== ADMIN_PASSWORD) {
            return res.status(400).json({
                success: false,
                message: "Invalid Admin Credentials",
            });
        }

        res.status(200).json({
            success: true,
            message: "Admin Logged in successfully",
        });
    } catch (error) {
        console.error("Error in admin login", error);
        res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
};
