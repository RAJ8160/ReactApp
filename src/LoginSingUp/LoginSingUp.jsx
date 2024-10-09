import { useState } from 'react'
import './Login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const LoginSingUp = () => {
    const navigate = useNavigate()
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [action, setAction] = useState("Sign Up");
   
    const handleSunmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:3001/',{name,email,password})
        .then(result=>{console.log(result)
            if(result.data === 'Success'){
                navigate('/home')
            }
           
        })
        .catch(err=>console.log(err));
        
    }
    return (
        <>
            <h1>LoginSingUp Page</h1>
            <form onSubmit={handleSunmit}>
            <div className="container">
                <div className="header">
                    <div className="text">
                        {action}
                    </div>
                    <div className="underline"></div>
                </div>
                <div className="inputes">
                    {action === "Login" ? <div></div> : <div className="input">
                        <i class="bi bi-person"></i>
                        <input type="text" placeholder='Enter name here' onChange={(e) => setName(e.target.value)} />
                    </div>}
                    <div className="input">
                        <i class="bi bi-envelope"></i>
                        <input type="email" placeholder='Enter email here' onChange={(e) => setEmail(e.target.value )} />
                    </div>
                    <div className="input">
                        <i class="bi bi-eye"></i>
                        <input type="password" placeholder='Enter password here' onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
                {action === 'Sign Up' ? <div></div> : <div className="forget-password">Lost Password<span>Click here</span></div>}
                <div className="submit-container">
                    <button className={action === "Login" ? "submit gray" : "submit"} onClick={() => {
                        setAction("Sign Up")
                    }}>Sing Up</button>
                    <button className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</button>
                </div>
            </div>
            </form>
        </>
    )
}