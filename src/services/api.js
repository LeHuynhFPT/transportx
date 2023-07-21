import axios from "axios";

const BASE_URL = "https://localhost:7187/api/";
const api = axios.create({
    baseURL:BASE_URL
});

export default api;