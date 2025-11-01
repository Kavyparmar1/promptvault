  import React from 'react'
  import { MdDashboard } from "react-icons/md";
  import { NavLink } from 'react-router-dom';
  import { RxText } from "react-icons/rx";
  import { MdEdit } from "react-icons/md";
  import { RiRobot3Fill } from "react-icons/ri";
  import { MdOutlineSettingsSuggest } from "react-icons/md";



  const Dash = () => {
    return (
      <>
        <div className='h-screen fixed bottom-0 w-[20%] bg-[#2C2C2C] flex items-center justify-start flex-col text-[#7A7A7A] gap-5  '>
              <div className='text-white font-[dashFont2] mt-2 h-10 w-full border-b-2 border-[#E8ED25] flex  items-center justify-center text-2xl'><h1>Prompt Vault</h1></div>
              <div className=' mt-7 text-white font-[dashFont] h-10 w-full  flex items-center justify-center text-2xl'>
                  <NavLink to='/dashboard' className={({isActive})=>`${isActive?'text-[#E6EC2A]':'text-[#737373]'} font-[DashFont] text-xl flex items-center gap-2`}> <MdDashboard />Dashboard</NavLink>
              </div>
              <div className='  text-white font-[dashFont] h-10 w-full  flex items-center justify-center text-2xl'>
                  <NavLink to='/prompts' className={({isActive})=>`${isActive?'text-[#E6EC2A]':'text-[#737373]'} font-[DashFont] text-xl flex items-center gap-2`}> <RxText />My Prompts</NavLink>
              </div>
              <div className='  text-white font-[dashFont] h-10 w-full  flex items-center justify-center text-2xl'>
                  <NavLink to='/edit' className={({isActive})=>`${isActive?'text-[#E6EC2A]':'text-[#737373]'} font-[DashFont] text-xl flex items-center gap-2`}> <MdEdit />Prompt Editor</NavLink>
              </div>
              <div className='  text-white font-[dashFont] h-10 w-full  flex items-center justify-center text-2xl'>
                  <NavLink to='/ai' className={({isActive})=>`${isActive?'text-[#E6EC2A]':'text-[#737373]'} font-[DashFont] text-xl flex items-center gap-2`}> <RiRobot3Fill />AI Prompt Generator</NavLink>
              </div>
              <div className='  text-white font-[dashFont] h-10 w-full  flex items-center justify-center text-2xl'>
                  <NavLink to='/setting' className={({isActive})=>`${isActive?'text-[#E6EC2A]':'text-[#737373]'} font-[DashFont] text-xl flex items-center gap-2`}> <MdOutlineSettingsSuggest />Setting</NavLink>
              </div>
              <div className='text-white absolute font-[dashFont] h-10 w-full  flex items-start px-5 flex-col justify-start bottom-20 gap-2 text-xl'>
                     <h4>Take Break Regulary!</h4>
                     <button className='px-5 py-2 rounded bg-red-500'>Logout</button>
              </div>
        </div>
        
      </>
    )
  }

  export default Dash