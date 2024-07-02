import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{backgroundColor:"black", height:'100vh'}} className="d-flex align-items-center justify-content-center">

        <div style={{backgroundColor:"white", width:'500px'}} className=" p-5 rounded">
          <h1 className='text-info'>counter application</h1>

          <h1 className='text-center my-5'style={{fontSize:"50px"}}>0</h1>

          <div className="mt-5 d-flex justify-content-evenly">

            <button className='btn btn-warning'>Decrement</button>
            <button className='btn btn-danger'>reset</button>
            <button className='btn btn-success'>increment</button>

          </div>
            <div className="d-flex mt-5">
              <input type="text" placeholder='range'className='form-control'/>
              <button className='btn btn-primary ms-3'>click</button>
            </div>
        </div>

      </div>
    </>
  )
}

export default App
