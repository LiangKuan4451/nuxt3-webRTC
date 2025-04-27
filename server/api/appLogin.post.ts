export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const code2Session = await getCode2Session(body.code);
  
  const code2verifyinfo = await getCode2VerifyInfo(body.code);

  return code2Session
});

async function getCode2Session(jsCode: string) {

  const appid = "wxdb16a214c8c623d1";
  const sercet = "eb2aa59cb629c169915b3a6c6d83bb5e";
  const js_code = jsCode;
  const grant_type = "authorization_code";

  let code2Session = await fetch(
    `https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${sercet}&js_code=${js_code}&grant_type=${grant_type}`
  );

  return code2Session.json();
}

async function getCode2VerifyInfo(jsCode: string) {
    // js_code不对，需要从另一个API获取jscode
    // 见 https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/miniapp/api/auth/wx.weixinMiniProgramLogin.html
  const appid = "wx4fde2d40f0579ca5";
  const sercet = "04938a80a5a0cbca196f67ed64890a5c";
  const js_code = jsCode;
  const grant_type = "authorization_code";

  let code2verifyinfo = await fetch(
    `https://api.weixin.qq.com/donut/code2verifyinfo?appid=${appid}&appsecret=${sercet}&js_code=${js_code}&grant_type=${grant_type}`
  );

  return code2verifyinfo.json();
}
