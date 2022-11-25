import { login } from '@/scripts/user';
import { useState } from 'react';


const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const submit = async()=> {
    setError("")
    if(!password || !username) {
      setError("please fill in all fields")
      return
    }
    const error = await login(username,password)
    if(error){
      setError(error)
    }
  }

  return (
    <div className='border-b py-1'>
      <p className='text-red-700'>{error}</p>
     <input type="text" className='bg-transparent border-transparent focus:outline-0' placeholder='Username' defaultValue={username} onChange={event => setUsername(event.target.value)} />
     <input type="password" className='bg-transparent border-transparent focus:outline-0' placeholder='Password' defaultValue={password}  onChange={event => setPassword(event.target.value)}/>
     <button className="px-4 py-1 font-bold" style={{background:"#1177ab"}} onClick={submit}> Login </button>
    </div>
  );
};

export default Login;
