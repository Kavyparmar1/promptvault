import React, { useEffect, useState } from 'react'

const Dashhero = () => {
   const [day, setDay] = useState(new Date())
useEffect(()=>{
  let timer = setInterval(()=>{
    setDay(new Date())
  }, 1000)
  return ()=>clearInterval(timer)
  
},[])



  return (
    <>
           <div className='h-20  w-full  flex mt-2 px-5 justify-between'>
                   <div><h1 className='text-2xl font-[dashFont]'>Dashboard</h1></div>
                   <div><h1 className='text-2xl text-[#737373] font-[dashFont]'>Mr./Mrs.Kavy</h1></div>
           </div>
         <div className='flex  flex-col gap-10 justify-center items-center  mt-3   '>
            <div className='h-50 w-[70%] relative bg-[#FFFFFF] font-[dashFont] text-l flex items-start px-10 justify-center flex-col rounded-lg '>
              <h1 className='text-2xl font-[dashFont] text-[] '>Hey Kavy, Welcome Back!</h1>
              <br />
              <h1>Have you stored your prompt today? If not, then <br />
              what are you waiting for, go lock something amazing !</h1>
              <br />
              <button className='px-5 py-2 rounded bg-blue-500'>Create Prompt</button>
                <div className='absolute bottom-0 right-0 top-1/2 -translate-y-1/2 w-40 h-40 bg-[#F8F8F6] mr-5 rounded-full flex items-center justify-center'>
                 <span className='text-2xl flex items-center justify-center text-[#225556]  font-[dashFont] '>{day.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span>
                </div>
            </div>
            <div className='h-50 w-[70%] relative bg-[#FFFFFF] font-[dashFont] text-l flex items-start px-10 justify-center flex-col rounded-lg '>
               <h1>View your creations and what others in the community are sharing.</h1>
               <br />
               <h1>Here are your recent prompts. Keep track of your progress and stay motivated!</h1>
               <br />
               <button className='px-5 py-2 rounded bg-blue-500'>View All Prompts</button>
            </div>
            <div  className='h-50 w-[70%] relative bg-[#FFFFFF] font-[dashFont] text-l flex  items-center px-10 justify-start rounded-lg '>
              <div className='h-30 w-30 rounded-full '>
                <img className='w-full h-full object-cover rounded-full' src='https://api.dicebear.com/7.x/identicon/svg' alt='avatar' /> 
                 </div>
                   <div className='flex flex-col items-start justify-start ml-5 ' ><h1 className='text-2xl font-[dashFont]'>Mr./Mrs. Kavy</h1><h1 className='text-sm text-[#737373] font-[dashFont]'>20 Prompts Created</h1></div>
            </div>
         </div>
    </>
  )
}

export default Dashhero