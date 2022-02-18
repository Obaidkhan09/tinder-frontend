import axios from "axios";

const instance = axios.create({
    // baseURL : "http://localhost:4000",
    baseURL : "https://tinder09.herokuapp.com",
});
export default instance;