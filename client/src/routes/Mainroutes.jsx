import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Promptme from '../Pages/Promptme'
import Prompt from '../Pages/Prompt'
import Ai from '../Pages/Ai'
import Setting from '../Pages/Setting'



const Mainroutes = () => {
  return (
    <>
       <Routes>
          
           <Route path='/dashboard' element={<Dashboard/> } />
           <Route path='/prompts' element={<Promptme/> } />
           <Route path='/edit' element={<Prompt/> } />
           <Route path='/ai' element={<Ai/> } />
           <Route path='/setting' element={<Setting/> } />
          
       </Routes>
    </>
  )
}

export default Mainroutes