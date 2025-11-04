import React, { useEffect, useState } from 'react'

const Promtsget = () => {
  const [catagory, setcatagory] = useState('')
  useEffect(()=>{
       if(catagory !==''){
          console.log("Category changed:", catagory);
          
       }
      
  },[catagory])
  
  return (
    <> 
       <div className='h-20 fixed w-[80%] bg-[#FFFFFF] flex items-center justify-between px-20 ' >
                <div>
                <select
                value={catagory}
                onChange={(e)=>setcatagory(e.target.value)}
                className='px-10  border-2 border-[#737373] rounded-xl px-5  py-2 text-l font-[dashFont] outline-none' name="" id="">
                <option  selected disabled value="Select">Select category</option>
                <option value="personal">Personal</option>
                <option  value="community">Community</option>
               </select>
                </div>
                <div>
                    <button className='px-5 py-2 rounded bg-blue-500'>Add Prompt</button>
                </div>
       </div>
       <div className='flex flex-col gap-2 px-20 '>
           <div className='h-50  mt-25 bg-[#FFFFFF]  rounded-3xl'>
               <div className='h-10  flex items-center justify-between px-10 rounded-t-3xl'>
                    <div className='font-[dashFont] text-l '><h1>E-commerse</h1></div>
                    <div className='font-[dashFont] text-l text-[#737373]'><h1>Kavy</h1></div>
               </div>
               <div className='h-20 bg-red-400'>
                   <h4>lorem50  </h4>
               </div>
           </div>
           <div className='h-50 mt-2 bg-[#FFFFFF]'></div>
       </div>
    </>
  )
}

export default Promtsget