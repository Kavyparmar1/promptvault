import React, { useState } from 'react'
import axios from 'axios'
const Promptscreate = () => {
     const [title, settitle] = useState("")
     const [prompt, setprompt] = useState("")
     const [tag, settag] = useState("")
     const [category, setcategory] = useState("")
    
    const submitHandler =async (e)=>{
          e.preventDefault()
          const form = {
             title:title,
             prompt:prompt,
             tag:tag,
             category:category
          }
   //api's
         
          
          
    }
     
  return (
     <>
         <form className='h-[80%] rounded-4xl p-1 w-[50%] bg-[#FFFFFF] flex flex-col gap-10 items-center justify-center' action="">
              <input
              value={title}
              onChange={(e)=>settitle(e.target.value)}
              className='bg-zinc-800 text-white rounded-xl px-20 py-2 outline-none ' type="text" placeholder='Title' />
              <textarea 
              value={prompt}
              onChange={(e)=>setprompt(e.target.value)}
              className='bg-zinc-800 text-white rounded-xl px-20 py-5 h-40 outline-none ' placeholder='Paste Your Prompt' name="" id=""></textarea>
              <select 
              value={tag}
              onChange={(e)=>settag(e.target.value)}
              className='bg-zinc-800 text-white rounded-xl px-20 py-2  outline-none ' name="" id="">
                <option selected disabled value="Tag">Select a Tag</option>
                 <option value="Marketing">Marketing</option>
                 <option value="Design">Design</option>
                 <option   value="Coding">Coding</option>
                 <option value="Writing">Writing</option>
                 <option value="Business">Business</option>
                 <option value="Education">Education</option>
                 <option value="Research">Research</option>
                 <option value="AI Tools">AI Tools</option>
                 <option value="Social Media">Social Media</option>
                 <option value="Productivity">Productivity</option>
                 <option value="Other">Other</option>
              </select>
              <select
            value={category}
            onChange={(e)=>setcategory(e.target.value)}
              className='bg-zinc-800 text-white rounded-xl px-20 py-2  outline-none ' name="" id="">
                 <option selected disabled value="category">Select Category</option>
                 <option value="Personal">Personal</option>
                 <option value="Community">Community</option>
              </select>
              <button onClick={submitHandler} className='px-14 py-2 rounded bg-blue-500'>Submit</button>
         </form> 
     </>
  )
}

export default Promptscreate