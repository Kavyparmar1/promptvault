import React from 'react'

const Dashhero = () => {
  return (
    <>
           <div className='h-20 w-full  flex mt-2 px-5 justify-between'>
                   <div><h1 className='text-2xl font-[dashFont]'>Dashboard</h1></div>
                   <div><h1 className='text-2xl text-[#737373] font-[dashFont]'>Mr./Mrs.Kavy</h1></div>
           </div>
       <div className='flex items-center mt-10 px-10 justify-center  grid grid-cols-2 gap-4'>
          <div className='h-50 w-[100%]  bg-red-500'>1</div>
          <div className='h-50 w-[100%] bg-red-500'>2</div>
          <div className='h-50 w-[100%] col-span-2 bg-red-500'>3</div>
          <div className='h-50 w-[100%] bg-red-500'>4</div>
          <div className='h-50 w-[100%] bg-red-500'>4</div>
          
       </div>
    </>
  )
}

export default Dashhero