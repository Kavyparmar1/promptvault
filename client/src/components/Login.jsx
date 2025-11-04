import React, { useState } from 'react'
import {OrbitProgress} from 'react-loading-indicators'
import axios from 'axios'
const Login = () => {
    
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [loading, setloading] = useState(false)
    const submitHandler =async (e)=>{
        e.preventDefault()
        const form = {
          
           email:email,
           password:password
        }
        console.log(form);
        
 //api's
 if (loading) return

 setloading(true)

try {
    const res=  await axios.post('http://localhost:3000/api/auth/login',{
        email:form.email,
        password:form.password
    },{
        withCredentials:true
    })
    console.log(res.data.message);
    
    setTimeout(() => {
       
        setemail('')
        setpassword('')
        setloading(false)
        alert(res.data.message || 'Login successfully!');
    }, 3000);
  
    
} catch (error) {
setTimeout(() => {
    alert(error.response?.data?.message || 'Something went wrong!')
    setemail('')
    setpassword('')
    setloading(false)
    setloading(false)
  
}, 1500);
}


        
        
  }
  return (
    <div className='h-screen w-[80%] ml-[20%]  flex items-center justify-center bg-[#F7F7F7]'> 
    <form className='flex flex-col gap-5' action="">
      <input
      value={email}
      onChange={(e)=>setemail(e.target.value)}
      className='bg-zinc-800 text-white rounded-xl px-20 py-2 outline-none ' type="text" placeholder='Email' />
       <input
      value={password}
      onChange={(e)=>setpassword(e.target.value)}
      className='bg-zinc-800 text-white rounded-xl px-20 py-2 outline-none ' type="password" placeholder='Password' />
      <button onClick={submitHandler} className='px-14 py-2 rounded-xl rounded bg-blue-500'>
      {loading ? <OrbitProgress variant="spokes" dense color="#000000" size="small" text="" textColor="#000000" /> : 'Submit'}
      </button>
    </form>
</div>
  )
}

export default Login