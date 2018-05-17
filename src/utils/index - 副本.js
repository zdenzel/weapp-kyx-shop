import wepy from 'wepy'
// import jwtDecode from 'jwt-decode'
import api from '@/utils/api.js'

if (!Object.assign) {
    // 定义assign方法
    Object.defineProperty(Object, 'assign', {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function(target) { // assign方法的第一个参数
            'use strict';
            // 第一个参数为空，则抛错
            if (target === undefined || target === null) {
                throw new TypeError('Cannot convert first argument to object');
            }

            var to = Object(target);
            // 遍历剩余所有参数
            for (var i = 1; i < arguments.length; i++) {
                var nextSource = arguments[i];
                // 参数为空，则跳过，继续下一个
                if (nextSource === undefined || nextSource === null) {
                    continue;
                }
                nextSource = Object(nextSource);

                // 获取改参数的所有key值，并遍历
                var keysArray = Object.keys(nextSource);
                for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
                    var nextKey = keysArray[nextIndex];
                    var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                    // 如果不为空且可枚举，则直接浅拷贝赋值
                    if (desc !== undefined && desc.enumerable) {
                        to[nextKey] = nextSource[nextKey];
                    }
                }
            }
            return to;
        }
    });
}

const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
}

//获取字符串的真实长度（字节长度）
const getlen = str => {
    let len = str.length,
        truelen = 0;
    for (var x = 0; x < len; x++) {
        if (str.charCodeAt(x) > 128) {
            truelen += 2;
        } else {
            truelen += 1;
        }
    }
    return Math.ceil(truelen);
}
//按字节长度截取字符串，返回substr截取位置
const cutstr = (str, length) => {
    let len = str.length,
        tlen = len,
        nlen = 0;
    for (var x = 0; x < len; x++) {
        if (str.charCodeAt(x) > 128) {
            if (nlen + 2 < length) {
                nlen += 2;
            } else {
                tlen = x;
                break;
            }
        } else {
            if (nlen + 1 < length) {
                nlen += 1;
            } else {
                tlen = x;
                break;
            }
        }
    }
    return tlen;
}

const hex2rgba = (hex, opacity = 1) => {
    try {

        if (hex.indexOf('rgba(') > -1) {
            let rgba = hex.match(new RegExp(/(\w+)/, 'ig'));
            return `rgba(${rgba[1]},${rgba[2]},${rgba[3]},${opacity})`;
        }

        if (hex.indexOf('rgb(') > -1) {
            let rgb = hex.match(new RegExp(/(\w+)/, 'ig'));
            return `rgba(${rgb[1]},${rgb[2]},${rgb[3]},${opacity})`;
        }

        if (hex.indexOf('#') < 0 || hex.length < 4 || (hex.length >= 5 && hex.length <= 6)) {
            return hex;
        }

        hex = hex.length == 4 ? `${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}` : hex;

        let rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

        let r = parseInt(rgb[1], 16);
        let g = parseInt(rgb[2], 16);
        let b = parseInt(rgb[3], 16);

        return rgb ? `rgba(${r},${g},${b},${opacity})` : hex;
    } catch (e) {
        return '#ffffff';
    }
}

const status2str = (status, type) => {
    let text = ''
    if (type == 'order') {
        switch (status) {
            case 0:
                text = '待付款';
                break;
            case 1:
                text = '待发货';
                break;
            case 2:
                text = '待收货';
                break;
            case 3:
                text = '待评价';
                break;
            case 4:
                text = '已完成';
                break;
            default:
                text = '已失效';
        }
    }
    return text
}

const thumbnail = (url, optimize) => {
    optimize = optimize || '400x400';
    return url + '_' + optimize + url.substring(url.lastIndexOf("."), url.length);
}

/**
 * 封装微信的的request
 */
async function request(url, option) {
    let opts = Object.assign({}, {
        url: url,
        data: {},
        header: {},
        method: 'GET'
    }, option)

    return new Promise(async(resolve, reject) => {
        wepy.request({
            url: opts.url,
            data: opts.data,
            method: opts.method.toUpperCase(),
            // dataType: 'json',
            header: Object.assign({}, {
                'Content-Type': 'application/json',
                'token': wepy.getStorageSync('token')
            }, opts.header),
            success(res) {
                console.log('success', res)
            }
        }).then(async(res) => {

            console.log('res', res)

            if (res.status) {
                return resolve(res)
                // return
            }

            let errCodes = [100020, 100021, 100022, 100023, 100024]

            if (errCodes.some(n => n == res.errCode)) {

                showToast(res.message)
                return reject(res)

                // // 需要登录后才可以操作
                // // let login = await login()
                // if(login()){
                //     request(url, option)
                //     return
                // }
                // return reject(res)
            }

            return reject(res)

        }).catch(reject)
    })
}
/**
 * 检查微信会话是否过期
 */
async function checkSession() {
    try {
        return await wepy.checkSession()
    } catch (e) {
        return false
    }
}

/**
 * 检查是否登录
 */
async function checkLogin() {
    let res = false
    if (wepy.getStorageSync('token')) {
        res = await checkSession()
    }
    return res
}

async function getuid() {
    let res = await checkLogin()
    let uid = null,
        token = null
    if (res) {
        uid = wepy.getStorageSync('uid');
        token = wepy.getStorageSync('token');
        wepy.$instance.globalData.uid = uid;
        wepy.$instance.globalData.token = token;
        return { uid, token }
    } else {
        return await login()
    }
}

async function getShareInfo() {
    await request(api.share.default).then(({ result }) => {
        wepy.$instance.globalData.shareInfo = result || {};
    }).catch(e => {})
}

/**
 * 调用微信登录
 */
async function login() {

    let res = await checkLogin()
    let uid = wepy.getStorageSync('uid') || null,
        token = wepy.getStorageSync('token') || null
    let { code } = await wepy.login()
    let { userInfo } = await getUserInfo()

    await request(api.user.login, { data: { code, userInfo }, method: 'POST' }).then(({ result }) => {
        uid = result.uid;
        token = result.token;
    }).catch(e => {})

    wepy.setStorageSync('uid', uid);
    wepy.setStorageSync('token', token);
    wepy.$instance.globalData.uid = uid;
    wepy.$instance.globalData.token = token;

    // if(!res) {
    //     let { code } = await wepy.login()
    //     let { userInfo } = await getUserInfo()

    //     if(code){
    //         await request(api.user.login, { data: { code, userInfo}, method: 'POST' }).then(({ result }) => {
    //             wepy.setStorageSync('token', result.token);
    //             wepy.$instance.globalData.token = result.token;
    //         }).catch(e => { })
    //     }
    // } else{
    //     token = wepy.getStorageSync('token');
    //     wepy.$instance.globalData.token = token;
    // }

    return { uid, token }
}

async function getUserInfo() {
    try {
        return await wepy.getUserInfo({ withCredentials: true })
    } catch (e) {
        return false
    }
}

function redirect(url) {
    // 判断页面是否需要登录
    if (!url) {
        wepy.redirectTo({
            url
        })
    } else {
        wepy.redirectTo({
            url: '/pages/auth/login'
        })
        return false
    }
}

function showToast(title, type) {
    let image = '/images/toast-warn.png'
    switch (type) {
        case 'success':
            image = '/images/toast-success.png';
            break;
        case 'error':
            image = '/images/toast-error.png';
            break;
        case 'info':
            image = '/images/toast-info.png';
            break;
        case 'warn':
            image = '/images/toast-warn.png';
            break;
    }
    wepy.showToast({
        title,
        image
    })
}

module.exports = {
    formatTime,
    hex2rgba,
    getlen,
    cutstr,
    status2str,
    thumbnail,
    request,
    checkLogin,
    checkSession,
    login,
    getUserInfo,
    getShareInfo,
    redirect,
    showToast
}
