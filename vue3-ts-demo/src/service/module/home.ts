import { axiosRequest2 } from '../index'
//设置返回值类型
interface IHomeData {
  data: any
  returnCode: string
  success: boolean
}
export const getTestData = () =>
  axiosRequest2
    .request<IHomeData>({
      url: '/home/multidata'
    })
    //如果promise不使用泛型，此处为unknow类型，无法使用
    .then((res) => {
      return res
    })
