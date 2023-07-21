import React from "react";
import logo1 from "../assets/imgs/logo1.jpg";
import { NavLink,isActive } from "react-router-dom";
// import logo from '../assets/imgs/logo.png';
function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
            <NavLink className="navbar-brand" to="/">
                <img src={logo1} width={150} height={34}/>
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div style={{paddingRight: '100px'}} className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li style={{paddingLeft: '60px'}} className="nav-item active">
                        <NavLink className={({isActive})=>isActive?"nav-link page-active":"nav-link"} to="/">Trang chủ</NavLink>
                    </li>
                    <li style={{paddingLeft: '60px'}} className="nav-item">
                        <NavLink className={({isActive})=>isActive?"nav-link page-active":"nav-link"} to="/taodon">Tạo đơn</NavLink>
                    </li>
                    <li style={{paddingLeft: '60px'}} className="nav-item">
                        <NavLink className={({isActive})=>isActive?"nav-link page-active":"nav-link"} href="#">Tin tức</NavLink>
                    </li>
                    <li style={{paddingLeft: '60px'}} className="nav-item">
                        <NavLink className={({isActive})=>isActive?"nav-link page-active":"nav-link"} to="/auth/register">Đăng kí</NavLink>
                    </li>
                    <li style={{paddingLeft: '60px'}} className="nav-item">
                        <NavLink className={({isActive})=>isActive?"nav-link page-active":"nav-link"} to="/auth/login">Đăng nhập</NavLink>
                    </li>
                    <li style={{paddingLeft: '60px'}} className="nav-item">
                        <NavLink className={({isActive})=>isActive?"nav-link page-active":"nav-link"} href="#">Admin</NavLink>
                    </li>
                    <li className="nav-item">
                    </li>
                </ul>
            </div>
        </nav>
);
}
export default Navbar;