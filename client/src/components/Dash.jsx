import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar';




const Dash = () => {
  
  const [time, setTime] = useState(new Date().toLocaleString());
  const [value, onChange] = useState(new Date());


useEffect(()=>{
  const timer = setInterval(()=>{
     setTime(new Date().toLocaleString())
  },1000)

  return ()=> clearInterval(timer)
},[])
   

 
  
  return (
    <>
       <div className='h-full w-80 bg-[#404040] relative py-20 flex items-center flex-col gap-10 text-white'>
           <div className='h-15 w-full  flex items-center justify-center '>
            <h1 className='text-xl font-[dashFont] border-b-2 text-left'>Prompt Vault</h1>
           </div>
           <div className='hero h-13 w-full  bg-[#4b4848] flex items-center justify-center'>
           <h1 className='text-xl font-thin font-[dashFont]'>Dashboard</h1>
           </div>
           <div className=' hero h-13 w-full  bg-[#4b4848] flex items-center justify-center'>
           <h1 className='text-xl font-[dashFont]'>My Prompts</h1>
           </div>
           <div className=' hero h-13 w-full bg-[#4b4848] flex items-center justify-center'>
           <h1 className='text-xl font-[dashFont]'>Prompt Editor</h1>
           </div>
           <div className='hero h-13 w-full bg-[#4b4848]  flex items-center justify-center'>
           <h1 className='text-l font-[dashFont]'>Review & Enhancment</h1>
           </div>
           <div className='hero h-13 w-full bg-[#4b4848] flex items-center justify-center'>
           <h1 className='text-xl font-[dashFont]'>Setting</h1>
           </div>
           <div  className=' h-25 w-full  flex  flex-col gap-4 absolute bottom-5 font-[dashFont]'>
               <div>
               <h1 className='text-l'>Take break regularly!</h1>
               
               </div>
               <div><button className='px-5 py-2 rounded bg-red-500'>Logout</button></div>
              </div>
       </div>
       <div className='h-full w-full bg-[#5D6253] text-white flex flex-col items-center justify-between font-[dashFont]'>
          <div className='h-20 bg-[#5D6253] w-full flex items-center justify-between p-10'>
            <div><h1 className='text-xl'>Dashboard</h1></div>
            <div><h1 className='text-xl'>Mr./Mrs.kavy</h1></div>
          </div>
          <div className='h-100 h-20 bg-[#404040] relative w-full flex items-center justify-between'>
            <div className=' flex flex-col items-start justify-between font-[dashFont] gap-15 px-10 py-20  '>    <div><h1>Hello kavy!</h1></div>
            <div><h4>Have you stored your prompt today? If not, then <br /> what are you waiting for, go lock something amazing !</h4></div>
            <div><button className='px-5 py-2 rounded bg-red-500'>Add Prompt</button></div></div>
            <div className='p-10'>
                         <h4 className='text-[15px]'>{time}</h4>
            </div>
            
          </div>
          <div className='h-62 bg-[#404040] w-full mb-5 p-2'>
           <div className='h-full  w-[50%] flex justify-center items-center '> <Calendar onChange={onChange} value={value} /></div>
           <div></div>
          </div>
       </div>
    </>
  )
}

export default Dash