import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3200'
})

export default instance;