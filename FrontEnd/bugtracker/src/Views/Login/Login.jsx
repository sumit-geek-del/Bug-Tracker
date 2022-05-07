import React,{useState} from "react";
import {useDispatch} from 'react-redux'
import { signIn } from "../../Controllers/Redux/authSlice";
import './login.css'
const Login = () => {

    const dispatch = useDispatch();
    const [formInput, setFormInput] = useState({
        name:"",
        password:""
    })

    function inputChanged(e){
        setFormInput({
            ...formInput,
            [e.target.name]:e.target.value
        })
    }

    function submit(e){
        dispatch(signIn(formInput));
        e.preventDefault();
    }

  return (
    <div className="loginBg">
        <form className="login-panel">
            <h1>Login:</h1>
            <input type="text" name="name" placeholder="Name" onChange={inputChanged} value={formInput.name} />
            <input type="password" name="password" placeholder="password" onChange={inputChanged} value={formInput.password} />
            <button type="submit" onClick={submit}>Login</button>
        </form>
    </div>
  )
}

export default Login