import React, { useState } from 'react'
import axios from 'axios'
const Register = () => {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [loading, setloading] = useState(false)
    const submitHandler =async (e)=>{
        e.preventDefault()
        const form = {
           name:name,
           email:email,
           password:password
        }
        console.log(form);
        
 //api's
 if (loading) return

 setloading(true)

try {
    const res=  await axios.post('http://localhost:3000/api/auth/register',{
        name:form.name,
        email:form.email,
        password:form.password
    },{
        withCredentials:true
    })
    console.log(res.data.message);
    
    setTimeout(() => {
        setname('')
        setemail('')
        setpassword('')
        setloading(false)
        
    }, 3000);
    alert(res.data.message || 'Registered successfully!');
    
} catch (error) {
setTimeout(() => {
    alert(error.response?.data?.message || 'Something went wrong!')
    setloading(false)

}, 1500);
}


        
        
  }
  return (
    <div className='h-screen w-[80%] ml-[20%]  flex items-center justify-center bg-[#F7F7F7]'> 
            <form className='flex flex-col gap-5' action="">
            <input
              value={name}
              onChange={(e)=>setname(e.target.value)}
              className='bg-zinc-800 text-white rounded-xl px-20 py-2 outline-none ' type="text" placeholder='Name' />
               <input
              value={email}
              onChange={(e)=>setemail(e.target.value)}
              className='bg-zinc-800 text-white rounded-xl px-20 py-2 outline-none ' type="text" placeholder='Email' />
               <input
              value={password}
              onChange={(e)=>setpassword(e.target.value)}
              className='bg-zinc-800 text-white rounded-xl px-20 py-2 outline-none ' type="password" placeholder='Password' />
              <button onClick={submitHandler} className='px-14 py-2 rounded-xl rounded bg-blue-500'>
              {loading ? 'Submitting...' : 'Submit'}
              </button>
            </form>
    </div>
  )
}

export default Register 