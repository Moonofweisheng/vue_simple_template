import base from '../base/base' //引入接口域名列表
import instance from '../http/http' //导入http中创建的axios实例
// import store from '../../store/index' //导入store
// import qs from 'qs'

const api = {
    /**
     * get 方法
     * @param {接口地址}}} link 
     * @param {接口参数}} data 
     */
    get(link, data) {
        return instance({
            url: link,
            data: data,
            method: 'get'
        })
    },
    post(link, data) {
        return instance({
            url: link,
            data: data,
            method: 'post'
        })
    }
}

export default api