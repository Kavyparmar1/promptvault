const userModel = require("../model/user.model")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

async function registerController(req,res) {
    const {name , email ,password} = req.body 
   
    const userAlreadyExist = await userModel.findOne(
        {
            email
        }
    )
    if(userAlreadyExist){
        return res.status(400).json({
            message:'user already exist'
        })
    }
    const hash = await bcrypt.hash(password,10)
    const user = await userModel.create({
        name,
        email,
        password:hash
})
 const token = jwt.sign({id:user._id},process.env.JWT_SEC_KEY)
 res.cookie("token",token)
 return res.status(201).json({
    message:'user created succesfully',
    user
 })
}
async function loginController(req,res) {
    const {email , password } = req.body
    const userExist = await userModel.findOne(
        {
            email
        }
    )
    if(!userExist){
        return res.status(400).json({
            message:"user not registerd in promtvault"
        })
    }
    const passValid = await bcrypt.compare(password,userExist.password)
    if(!passValid){
        return res.status(400).json({
            message:"password invalid"
        })
    }
    const token = jwt.sign({id:userExist._id},process.env.JWT_SEC_KEY)
 res.cookie("token",token)
   return res.status(200).json({
    message:"Login succesfully",
    user:userExist
   })
} 
async function  logoutController(req,res) {
    res.clearCookie("token",{
        httpOnly: true,
   })
   return res.status(200).json({
    success: true,
    message: "Logged out successfully.",
  });
}
module.exports = {registerController, loginController , logoutController}