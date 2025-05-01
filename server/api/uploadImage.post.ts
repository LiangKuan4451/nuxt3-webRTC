import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY

const supabase = createClient(supabaseUrl, supabaseKey)
// 上传图片
export default defineEventHandler(async (event) => {
  
  const files = await readMultipartFormData(event)
  // console.log('files',files);
  
  const file = files[0]
  const filename= `avatar/${file.name}`
  const fileExt = filename.split('.').pop()
  const filePath = `uploads/${Date.now()}.${fileExt}`
  // const openid = 
  try {
    const { data, error } = await supabase.storage
      .from('user-images') // 替换为你的存储桶名称
      .upload(filename, file.data, {
        contentType: file.type,
        upsert: true
      });
    
    if (error) {
      throw createError({
        statusCode: 500,
        statusMessage: error.message
      });
    }
    
    // 5. 获取公共 URL (如果需要)
    const { data: urlData } = supabase.storage
      .from('user-images')
      .getPublicUrl(filename);
    
    return {
      success: true,
      path: data.path,
      publicUrl: urlData.publicUrl
    };
    
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message
    });
  }
})
