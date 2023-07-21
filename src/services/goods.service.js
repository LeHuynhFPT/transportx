import api from "./api";


export const getGood = async ()=>{
    try {
        const url = "goods";
        const rs = await api.get(url);
        return rs.data;
    } catch (error) {
        return [];
    }
}

export default getGood;