import api from "./api";

export const sendDataToAPI = async (formData) => {
    const url = 'Order/create';
    try {
        const rs = await api.post(url,formData);
        return rs.data;
    }catch (error){
        alert("Tạo đơn thất bại, vui lòng nhập lại");
        return {};
    }   
}

export const getOrderByUserId = async (userId) => {
    const url = `Order/get-by-userId?userId=${userId}`;
    try {
        const rs = await api.get(url,userId);
        return rs.data;
    }catch (error){
        return {};
    }   
}

export const getStatusDescription = async (orderId) => {
    const url = `Status?orderId=${orderId}`;
    try {
        const rs = await api.get(url,orderId);
        return rs.data;
    }catch (error){
        return {};
    }   
}

export default sendDataToAPI;