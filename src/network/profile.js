import { request } from './request'

//商品数据
export function getGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}