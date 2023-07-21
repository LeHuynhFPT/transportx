import api from "./api";

export const getInsurance = async ()=>{
    try {
        const url = "insurance";
        const rs = await api.get(url);
        return rs.data;
    } catch (error) {
        return [];
    }
}

export default getInsurance;