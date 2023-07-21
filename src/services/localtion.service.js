import api from "./api";

// const BASE_URL = "https://provinces.open-api.vn/api/";
// const location_api = axios.create({
//     baseURL:BASE_URL
// });

// export const find = async (id)=>{
//     const url = location_api;
//     try {
//         const rs = await url.get('?depth=3');
//         console.log(rs)
//        // const token = rs.data.token;
//         return rs.data;
//     } catch (error) {
//         return {};
//     }
// }

export const getProvince = async ()=>{
    try {
        const url = "location/get-province";
        const rs = await api.get(url);
        return rs.data;
    } catch (error) {
        return [];
    }
}

export const getDistrict = async (id)=>{
    try {
        const url = `location/get-district?Id=${id}`;
        const rs = await api.get(url);
        return rs.data;
    } catch (error) {
        return [];
    }
}

export const getWard = async (id)=>{
    try {
        const url = `location/get-ward?Id=${id}`;
        const rs = await api.get(url);
        return rs.data;
    } catch (error) {
        return [];
    }
}





