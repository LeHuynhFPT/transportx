import React, { useState,useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { getOrderByUserId } from "../services/order.service";
import moment from "moment/moment";


function OrderList() {
    const userData = JSON.parse(localStorage.getItem('state'));
    const [orders,setOrder] = useState([]);
    // const [status,setStatus] = useState("");
    const getOrder = async ()=>{
        // let Fee = 0;
        const orders = await getOrderByUserId(userData.userId);
        setOrder(orders);
        // const goods = await UserContext.Goods.First(e => e.Id = orders.goodsId);
        // Fee += goods.price;
        // return Fee;
    }
    useEffect(()=>{
        getOrder();
    },[])
    // const getStatus = async () => {
    //     const status = await getStatusDescription(orders.orderId);
    //     return status.description;
    // }
    
    return(
        <div>
            <Sidebar />
            <div className="table" style={{marginTop: '100px',marginLeft: '300px',marginRight: '50px'}}>
                <h1 style={{textAlign: 'center'}}>Danh sách đơn hàng</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Mã đơn hàng</th>
                            <th scope="col">Tên người gửi</th>
                            <th scope="col">Số điện thoại</th>
                            <th scope="col">Tên người nhận</th>
                            <th scope="col">Số điện thoại</th>
                            <th scope="col">Tiền ship</th>
                            <th scope="col">Ngày nhận</th>
                            <th scope="col">Ngày gửi</th>
                            <th scope="col">Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map(item =>
                                <tr>
                                    <td>{item.orderId}</td>
                                    <td>{item.senderName}</td>
                                    <td>{item.senderPhone}</td>
                                    <td>{item.receiverName}</td>
                                    <td>{item.receiverPhone}</td>
                                    <td>{item.shippingFee}</td>
                                    <td>{moment(item.deliveryDate).format('DD-MM-YYYY')}</td>
                                    <td>{moment(item.receiveDate).format('DD-MM-YYYY')}</td>
                                    <td></td>
                                </tr> 
                            )
                        }                                         
                    </tbody>                    
                </table>
            </div>
        </div>
    );
}

export default OrderList;