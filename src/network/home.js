import {request} from './request'

//首页数据
export function getHomeMultidata(){
  return request({
    url:'/home/multidata'
  })
}

//商品数据
export function getGoods(type,page){
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}