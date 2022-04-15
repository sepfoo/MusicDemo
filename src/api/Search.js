import request from "@/utils/request";
export const searchHot = () => request({
    url: "/search/hot",
})


//搜索结果列表
export const searchResult = params => request({
    url: 'cloudsearch',
    params
})