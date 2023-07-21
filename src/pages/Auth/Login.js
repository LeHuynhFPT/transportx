import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import UserContext from "../../store/context";
import { auth_login } from "../../services/auth.service";
import api from "../../services/api";
import logo from "../../assets/imgs/logo1.jpg";
import '../../assets/css/Login.css';


function Login() {  
  const {state,dispatch} = useContext(UserContext);
  const [user,setUser] = useState({email:"",password:""});
  const history = useNavigate();
  const handleInput = (event)=>{
      user[event.target.name] = event.target.value;
      setUser(user);
  }
  const loginSubmit = async (e)=>{
      e.preventDefault();
      const u = await auth_login(user);
      dispatch({type:"AUTH_LOGIN",payload:u});
      localStorage.setItem("state",JSON.stringify(u));
      history('/taodon1');
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
            <form onSubmit={loginSubmit} method="post">
              <div className="form-outline mb-3">
                <label className="form-label">Email address</label>
                <input type="email" onChange={handleInput} name="email" className="form-control"/>
              </div>
              <div className="form-outline mb-3">
                <label className="form-label">Password</label>
                <input type="password" onChange={handleInput} name="password" className="form-control"/>
              </div>    
              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                  <label className="form-check-label">
                    Remember me
                  </label>
                </div>
                {/* <Link to="#" className="text-body">Forgot password?/</Link> */}
              </div>
              <div className="text-center text-lg-start mt-4 pt-2">
                <button type="submit" className="btn btn-primary btn-lg"
                  style={{paddingLeft: '2.5rem', paddingRight: '2.5rem'}}>Login</button>
                <p className="small fw-bold mt-2 pt-1 mb-0"> Don't have an account? <a href="/Register"
                    className="link-danger">Register</a></p>
              </div>        
            </form>
          </div>
        </div>  
      </div>
    </div>   
    );
}

export default Login;