const jwt = require("jsonwebtoken")
const userModel = require("../model/user.model")


async function protectAuth(req,res,next) {
    const token = req.cookies.token
    if(!token){
      return  res.status(400).json({
            message:"login firsrt "
        })
    }
try {
    const decode =  jwt.verify(token,process.env.JWT_SEC_KEY)
    const user = await userModel.findById(decode.id)
   req.user = user
   next()
    
    

} catch (error) {
    res.status(500).json({
        message:"something went wrong",
        error:error.message
    })
}
 
  
    
}
module.exports = protectAuth