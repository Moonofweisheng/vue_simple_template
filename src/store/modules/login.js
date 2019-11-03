const state = {
    ip: '',        //当前用户ip
    os: 'unKnow',  //用户系统版本
    token: '',//用户token
    mobile: '',//用户联系方式
}
const getters = {

}
const mutations = {
    /**
     * 更新ip地址
     * @param {*} state 
     * @param {*} ip 
     */
    updateIp(state, ip) {
        state.ip = ip
    },
    /**
     * 更新登录信息
     * @param {*} state 
     * @param {*} login 
     */
    login(state, login) {
        [state.os, state.token, state.shopCode]
            =
            [login.os, login.token, login.shopCode]
    },
    updateMobile(state, mobileObj) {
        [state.mobile, state.msg] = [mobileObj.mobile, mobileObj.msg]
    },
}
const actions = {

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}