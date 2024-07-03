import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increament, reset } from './redux/counterslice'

function App() {

  const count = useSelector((state)=>state.counterReducer.value)

  const dispatch = useDispatch()


  return (
    <>
      <div style={{backgroundColor:"black", height:'100vh'}} className="d-flex align-items-center justify-content-center">

        <div style={{backgroundColor:"white", width:'500px'}} className=" p-5 rounded">
          <h1 className='text-info'>counter application</h1>

          <h1 className='text-center my-5'style={{fontSize:"50px"}}>{count}</h1>

          <div className="mt-5 d-flex justify-content-evenly">

            <button type='button' className='btn btn-warning' >decrement</button>

            <button type='button' className='btn btn-danger'onClick={()=>dispatch(reset())}>reset</button>

            <button type='button' className='btn btn-success' onClick={()=>dispatch(increament())}>increment</button>

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
