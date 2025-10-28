const mongoose = require('mongoose')

const propmtSchema = new mongoose.Schema({
    authorId:{
        type:mongoose.Schema.Types.ObjectId,
         ref:'user',
         required:true
    },
    authorName:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    prompt:{
        type:String,
        required:true
    },
    tags:{
        type:String,
        enum: [
            "Marketing",
            "Design",
            "Coding",
            "Writing",
            "Business",
            "Education",
            "Research",
            "AI Tools",
            "Social Media",
            "Productivity",
            "Other",
          ],
          trim:true
    },
    category:{
        type:String,
        enum: ["Personal", "Community"],
        default:"Personal"
    }
},
{
    timestamps:true
})
const promptModel = mongoose.model('prompt',propmtSchema)
module.exports = promptModel