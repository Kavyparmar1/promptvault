const promptModel = require("../model/prompt.model")
const userModel = require("../model/user.model")

async function createPrompt(req,res) {
 const user = req.user
try {
    const {title,prompt,tags,category} = req.body
    const promptCreate = await promptModel.create({
        authorId:user.id,
        authorName:user.name,
        title,
        prompt,
        tags,
        category
    })
    return res.status(201).json({
        message:"prompt succesfully created",
        prompt:promptCreate
    })
} catch (error) {
    return res.status(500).json({
        message:"something went wrong",
        error:error.message
    })
}

 
}
async function getMePrompt(req,res){
try {
    const user = req.user 
 const prompt = await promptModel.find({
    authorId:user._id
 })
 res.status(200).json({
    message:"prompt fetched",
    prompt
 })
    
    
} catch (error) {
    return res.status(500).json({
        message:"something went wrong",
        error:error.message
    })
}
}
async function getAllprompt(req,res) {
    try {
        const allPrompt = await promptModel.find({category:'Community'})
      if(allPrompt.length == 0 ) {
        return res.status(400).json({
          message:"No prompt found"
        })
      }
      return res.status(200).json({
        message:"prompt fetched",
        allPrompt
      })
    } catch (error) {
        return res.status(500).json({
            message:"something went wrong",
            error:error.message
        })
    }
}

module.exports = {createPrompt,getMePrompt,getAllprompt}