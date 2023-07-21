import api from "./api";    

export const getWeight = async ()=>{
    try {
        const url = "weight";
        const rs = await api.get(url);
        return rs.data;
    } catch (error) {
        return [];
    }
}

export default getWeight;