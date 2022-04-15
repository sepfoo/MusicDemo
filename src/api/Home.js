//封装要发起的请求
import request from "@/utils/request";

//封装网络请求方法
export const recommondMusic = params => request({
    url: "/personalized",
    params
})

export const newsong = params => request({
    url: "/personalized/newsong",
    params
})


