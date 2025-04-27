export default defineEventHandler(async ()=>{
    const accountToken = await getAccountToken()
    
    return accountToken
})

// 获取后台调用凭证
async function getAccountToken(){
    const appid = "wxdb16a214c8c623d1";
    const sercet = "eb2aa59cb629c169915b3a6c6d83bb5e";
    const grant_type = "client_credential";
    
    const accountToken= await fetch(`https://api.weixin.qq.com/cgi-bin/token?grant_type=${grant_type}&appid=${appid}&secret=${sercet}`)

    return accountToken.json()
}