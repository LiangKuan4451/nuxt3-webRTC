import { createHmac } from 'node:crypto'
export default defineEventHandler(async (event)=>{
    const body = await readBody(event)
    const checkSessionKey = getCheckSessionKey(body.openid,body.session_key)
    return checkSessionKey
})

// 获取检验登录态
async function getCheckSessionKey(openId: any,sessionKey: any){
    console.log(openId,sessionKey);
    
    const getAccountToken = await $fetch('/api/getAccountToken')
    const accessToken = getAccountToken.access_token
    
    const openid = openId
    const signature = createHmac('sha256',sessionKey).update('').digest('hex')
    const sigMethod = 'hmac_sha256'

    console.log('access_token',accessToken);
    console.log('signature',signature);
    
    const checkSessionKey = await fetch(`https://api.weixin.qq.com/wxa/checksession?access_token=${accessToken}&signature=${signature}&openid=${openid}&sig_method=${sigMethod}`)

    return checkSessionKey.json()
}