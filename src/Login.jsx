import InputField from "./components/inputField";
import Button from "./components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './styles/style.css'
const Login=()=>{
        const navigate = useNavigate();                     
        const [credentials, setCredentials] = useState({
            userName: "",
            password: ""
        });
    
    
        const onChangeUsername = (value) => {
            setCredentials({
                ...credentials,
                userName: value
            });
        }
    
        const onChangePassword = (value) => {
            setCredentials({
                ...credentials,
                password: value
            });
        }
    
    
        return (
            <> 
                 <img id="sidepic" src="../assets/sidepicture.png" alt="keyvalue"  />
               
                <div className = "userloginbox">
                    <div>
                    <img src="../assets/logo.png" alt="keyvalue"/>
                    </div>
                    <InputField label='Username' onChange={onChangeUsername}/>
                    <InputField label='Password' onChange={onChangePassword}/>
                </div>
                <Button label="Login" handleClick = {() => navigate('/list')}/>
            </>
    
        )
    }
    
    
    export default Login;