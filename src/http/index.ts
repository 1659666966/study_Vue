//导入axios
import axios from 'axios';
import { ref } from 'vue'

const json = ref("/json")
const http =ref("http://localhost:5175/api")

export const getBanners = () => {
    return axios.get(json.value + "/banner.json");
}


// 获取 GetBanners
export const getBanners2 = () => {
    return axios.get(http.value + "/Image/GetBanners");
}

// 首页获取鲜花列表
export const getFlowers = (parms: {}) => {
    return axios.post(http.value + "/Flower/getFlowers",parms);
}

// 注册
export const Register = (parms: {}) => {
    return axios.post(http.value + "/Login/Register", parms); 
}

// 用户登录获取token

export const getToken = (parms: {}) => {
    return axios.post(http.value + "/Login/Check", parms); 
}

