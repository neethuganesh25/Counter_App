
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, rangeChange, reset } from './redux/Counterslice'
import { useState } from 'react'

function App() {

const [range,Setrange] =useState(0)  
const  count = useSelector((state)=>state.counterReducer.value)

//console.log(count);
//console.log(range);
const dispatch = useDispatch()

const handleRange = ()=>{
  if(!range){
    alert('please enter a valid input')
  }
  else{
    dispatch(rangeChange(Number(range)))
  }
}

    
  return (
    <>
<div style={{backgroundColor:'black',height:'100vh'}} className=' d-flex justify-content-center align-items-center'>
  <div style={{backgroundColor:'white',width:'500px'}} className='p-5 rounded text-center '>
    <h1 className='text-info'>
      Counter Application
    </h1>
    <h1 className='text-center my-5' style={{fontSize:'70px'}}>{count}</h1>
<div className='mt-5 d-flex justify-content-evenly'>
  <button className='btn  btn-warning' onClick={()=>dispatch(decrement())}>Decrement</button>
  <button className='btn  btn-danger' onClick={()=>dispatch(reset())}>Reset</button>
  <button className='btn  btn-success' onClick={()=>dispatch(increment())}>Increment</button>
</div>
<div className='d-flex mt-5'>
  <input type="text" placeholder='Range' className='form-control'onChange={(e)=>Setrange(e.target.value)} />
  <button className='btn btn-primary ms-3' onClick={()=>handleRange()}>Click</button>
</div>
  </div>

</div>
   
      
    
    </>
  )
}

export default App
