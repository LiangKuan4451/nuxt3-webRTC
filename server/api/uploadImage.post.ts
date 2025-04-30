import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY

const supabase = createClient(supabaseUrl, supabaseKey)
// 上传图片
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  
  if (!body.file || !body.fileName) {
    throw createError({
      statusCode: 400,
      statusMessage: '缺少文件数据或文件名'
    });
  }
  
  // 3. 处理 Base64 数据
  const base64Data = body.file.split(',')[1]; // 移除 data:image/jpeg;base64, 前缀
  const buffer = Buffer.from(base64Data, 'base64');
  
  // 4. 上传到 Supabase Storage
  try {
    const { data, error } = await supabase.storage
      .from('user-images') // 替换为你的存储桶名称
      .upload(body.fileName, buffer, {
        contentType: body.fileType || 'image/jpeg',
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
      .getPublicUrl(body.fileName);
    
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
