import axiosRequest from '@/service'

export function getAmountListData() {
  return axiosRequest.get({
    url: '/goods/amount/list'
  })
}

export function getGoodsCategoryCount() {
  return axiosRequest.get({
    url: '/goods/category/count'
  })
}

export function getGoodsCategorySale() {
  return axiosRequest.get({
    url: '/goods/category/sale'
  })
}

export function getGoodsCategoryFavor() {
  return axiosRequest.get({
    url: '/goods/category/favor'
  })
}

export function getGoodsAddressSale() {
  return axiosRequest.get({
    url: '/goods/address/sale'
  })
}
