import React, { useReducer, useState } from 'react'; 
import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register'; 
import INIT_STATE from './store/initState';
import  { UserProvider } from './store/context';
import reducer from './store/reducer';
import TaoDon from './pages/Taodon';
import Taodon1 from './pages/Taodon1';
import OK from './pages/123';
import OrderList from './pages/OrderList';

function App() {
    const localState = localStorage.getItem("state")?JSON.parse(localStorage.getItem("state")):INIT_STATE;
    const [state,dispatch] = useReducer(reducer,localState);
    return(
        <UserProvider value={{state,dispatch}}>
            <div className="App">
                <Routes>
                    <Route path='/taodon' element={<TaoDon/>}/>
                    <Route path='/taodon1' element={<Taodon1/>}/>
                    <Route path='/' element={<Login/>}/>
                    <Route path='/Register' element={<Register/>}/>
                    <Route path='/123' element={<OK/>}/>
                    <Route path='/orderlist' element={<OrderList/>}/>
                </Routes>
            </div>
        </UserProvider>
    );
}

export default App;
