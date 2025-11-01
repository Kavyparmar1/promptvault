import React from 'react'
import Mainroutes from './routes/Mainroutes'
import Dash from './components/Dashnav'

const App = () => {
  return (
    <div className='flex items-center justify-between'>
     <Dash />
      <Mainroutes />
    </div>
  )
}

export default App