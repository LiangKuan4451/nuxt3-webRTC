import { createClient } from '@supabase/supabase-js'
// 获取用户数据
export default defineEventHandler(async (event) => {
const openid =  getRouterParam(event,'openid')

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

const userData = await supabase.from('users').select().eq('openid',openid)

return userData
})
