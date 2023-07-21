import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../../assets/css/Login.css';
import logo from "../../assets/imgs/logo1.jpg";
import UserContext from "../../store/context";
import { auth_register } from "../../services/auth.service";

function Register() {
    const {state,dispatch} = useContext(UserContext);
    const [user,setUser] = useState({userName:"",email:"",password:"",phone:""});
    const history = useNavigate();
    const handleInput = (event) => {
        user[event.target.name] = event.target.value;
        setUser(user);
    }
    const registerSubmit = async (e) => {
        e.preventDefault();
        const u = auth_register(user);
        dispatch({type:"AUTH_REGISTER",payload:u.token});
        state.token = u.token;
        setTimeout(()=>{dispatch({type:"HIDE_LOADING"})},1000);
        history('/');
    }
    return(
        <div className="vh-100">
            <div className="container-fluid h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://sso.ghn.vn/images/banner/PXB_7050%201.png" className="img"
                            alt="Sample image"/>
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <img src={logo} alt="logo" />
                        <form onSubmit={registerSubmit} method="post">
                            <div className="form-outline mb-3">
                                <label className="form-label">Họ và tên</label>
                                <input type="text" onChange={handleInput} name="userName" className="form-control"/>
                            </div>
                            <div className="form-outline mb-3">
                                <label className="form-label">Số điện thoại</label>
                                <input type="phone" onChange={handleInput} name="phone" className="form-control"/>
                            </div>
                            <div className="form-outline mb-3">
                                <label className="form-label">Email address</label>
                                <input type="email" onChange={handleInput} name="email" className="form-control"/>
                             </div>
                            <div className="form-outline mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" onChange={handleInput} name="password" className="form-control"/>
                            </div>                               
                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type="submit" className="btn btn-primary btn-lg"
                                style={{paddingLeft: '2.5rem', paddingRight: '2.5rem'}}>Register</button>                             
                            </div>        
                        </form>
                    </div>
                </div>  
            </div>
        </div>   
    );
}

export default Register;