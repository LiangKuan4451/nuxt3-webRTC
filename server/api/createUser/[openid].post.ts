import { createClient } from '@supabase/supabase-js'
// 创建用户数据
export default defineEventHandler(async (event) => {

const body = await readBody(event)
console.log(body);

const openid = getRouterParam(event,'openid')

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY

const supabase = createClient(supabaseUrl, supabaseKey)



const userData = await supabase.from('users').insert([body]).select()

return userData
})
