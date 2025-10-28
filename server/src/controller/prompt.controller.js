const promptModel = require("../model/prompt.model")

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

module.exports = {createPrompt}