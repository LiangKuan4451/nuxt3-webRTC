import { createClient } from '@supabase/supabase-js'
// 创建用户数据
export default defineEventHandler(async (event) => {

const body = await readBody(event)
console.log(body);

const openid = getRouterParam(event,'openid')

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

const sqlData = {
    "openid": openid,
    "name": body.name || null,
    "birth_date": body.birth_date || null,
    "weight": body.weight || null,
    "height": body.height || null,
    "nickname": body.nickname || null,
    "avatar_url": body.avatar_url || null,
    "phone": body.phone || null,
    "qq": body.qq || null,
}

const userData = await supabase.from('users').insert([sqlData]).select()

return userData
})
