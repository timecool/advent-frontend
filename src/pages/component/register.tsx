import { register } from '@/scripts/user';
import { useState } from 'react';


const Register = () => {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [repeatPassword, setRepeatPassword] = useState("")
  const [error, setError] = useState("")

  const submit = async()=> {
    setError("")
    if(!email || !password || !username) {
      setError("please fill in all fields")
      return
    }
    if(repeatPassword !== password){
      setError("password is not equal to repeat password ")
      return
    }
    
    const error = await register(email,username,password)
    if(error){
      setError(error)
    }
  }

  return (
    <div className='pt-1'>
    <p className='text-red-700'>{error}</p>
     <input  className='bg-transparent border-transparent focus:outline-0' type="email" placeholder='E-mail' defaultValue={username} onChange={event => setEmail(event.target.value)} />
     <input  className='bg-transparent border-transparent focus:outline-0' type="text" placeholder='Username' defaultValue={username} onChange={event => setUsername(event.target.value)} /> <br/>
     <input className='bg-transparent border-transparent focus:outline-0' type="password" placeholder='Password' defaultValue={password}  onChange={event => setPassword(event.target.value)}/>
     <input  className='bg-transparent border-transparent focus:outline-0' type="password" placeholder='Repeat Password' defaultValue={repeatPassword}  onChange={event => setRepeatPassword(event.target.value)}/>
     <button className="px-4 py-1 font-bold" style={{background:"#1177ab"}}  onClick={submit}>Registrieren</button>
    </div>
  );
};

export default Register;
