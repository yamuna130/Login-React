import {useRef} from 'react'
import {useState} from 'react'

function App(){

 const[email,setEmail]=useState('');
 const[password,setPassword]=useState('');

  const[errors,setErrors]=useState({
  email:'',
  password:''
  })
  
  const emailpattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  function handleSubmit(){

    if(email.trim()===''){
      setErrors((errors)=>({...errors ,email:"enter email address"}))
    }
    else if(!emailpattern.test(email)){
      setErrors((errors)=>({...errors ,email:"enter valid email address"}))

    }
    else{
      setErrors((errors)=>({...errors,email:''}))
    }
    

    if(password.trim()===''){
      setErrors({...errors ,password:"enter password"})
    }
    else if(password.trim().length<(8)){
      setErrors((errors)=>({...errors,password:"password minimum 8 charecters"}))
    }
    
    else{
      setErrors((errors)=>({...errors,password:""}))
    }

  }



  return(
    <>
    <div className='border w-25 mt-5 m-auto p-4'>
      <h2 className='text-primary text-center'>Login Page</h2>
      <div className='mt-3'>
        <label>E-Mail</label>
        <input type='email' className='form-control' placeholder='Enter E-Mail'
        onChange={(e)=>{setEmail(e.target.value)}}></input>
        {errors.email&&<span className='text-danger'>{errors.email}</span>}
      </div>

      <div className='mt-3'>
      <label>Password</label>
        <input type='password' className='form-control' placeholder='Enter password' value={password}
         onChange={(e)=>{setPassword(e.target.value)}}
        ></input>
        {errors.password&&<span className='text-danger'>{errors.password}</span>}
      </div>
      <div className= 'mt-3'>
        <button className='btn btn-primary w-100'onClick ={handleSubmit}>Login</button>
      </div>
      </div>
      </>
  )
}

export default App;




  
    
 





   