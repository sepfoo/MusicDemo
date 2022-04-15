import  Axios  from "axios";
const ajax = Axios.create({
    baseURL:"http://localhost:3000"//服务器基地址
})

export default ajax