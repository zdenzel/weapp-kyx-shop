import wepy from 'wepy'
import { API } from './config'

const interfaces = {
    async getUserInfo() {
        const loginData = await wepy.login()
        const userinfo = await wepy.getUserInfo()
        userinfo.code = loginData.code
        return userinfo
    },
    async login() {
        let userinfoRaw = {}
        let userinfo = {}

        try {
            userinfoRaw = await interfaces.getUserInfo()
            userinfo = await wepy.request({
                url: API.user.login,
                dataType: 'json',
                data: {}
            })

            console.log(userinfo)

            await wepy.setStorageSync('token', null)
        } catch (e) {
            wepy.showModal({
                title: '提示',
                content: `获取用户信息失败，请关闭重新进入。${e.message}`
            })
        }
    },
    async checkSession(){
        return new Promise((resolve, reject) => {
            if(wepy.getStorageSync('token')){
                wepy.checkSession({
                    success: (res) => {
                        //session 未过期，并且在本生命周期一直有效
                        console.log('checkSession success', res)
                        this.globalData.token = wepy.getStorageSync('token') || null
                        this.globalData.isLogged = true
                        resolve(res)
                    },
                    fail: (res) => {
                        //登录态过期
                        console.log('checkSession fail', res)
                        wepy.removeStorageSync('token')
                        interfaces.login().then(resolve).catch(reject)
                    }
                })
            } else{
                interfaces.login().then(resolve).catch(reject)
            }
        })
    }
}

export default interfaces
