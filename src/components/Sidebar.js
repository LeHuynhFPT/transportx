import React from "react";
import "../assets/css/Sidebar.css";
import { BsSpeedometer2,BsFillPencilFill,BsFillClipboardCheckFill } from "react-icons/bs";
import { FaMoneyCheckAlt,FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo1 from "../assets/imgs/logo1.jpg";
import { Dropdown } from 'react-bootstrap';


function Sidebar() {
    return(
        <header>
            <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
                <div className="position-sticky">
                    <div className="list-group list-group-flush mx-3 mt-4">
                        <NavLink to="/taodon1" className={({isActive})=>isActive?"list-group-item list-group-item-action py-2 ripple mt-5":"nav-link mt-5"} aria-current="true">
                            <BsSpeedometer2 className="m-3" size={24}/>
                            <span>Home</span>
                        </NavLink>  
                        <NavLink to="/orderlist" className={({isActive})=>isActive?"list-group-item list-group-item-action py-2 ripple":"nav-link"}>
                            <BsFillClipboardCheckFill className="m-3" size={24}/>
                            <span>Quản lý đơn hàng</span>
                        </NavLink>
                    </div>
                </div>
            </nav>
            <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light fixed-top" >
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo1} height="50" alt="" loading="lazy" className="rounded-pill ms-1" />
                    </a> 
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" class="nav-link dropdown-toggle hidden-arrow d-flex align-items-center">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                            class="rounded-circle"
                            height="22"
                            alt="Avatar"
                            loading="lazy"
                        />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#action1">My profile</Dropdown.Item>
                            <Dropdown.Item href="#action2">Settings</Dropdown.Item>
                            <Dropdown.Item href="#action3">Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </nav>
         </header>
    );
}

export default Sidebar;