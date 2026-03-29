import { v2 as cloudinary, v2 } from 'cloudinary'
import fs from 'fs'

cloudinary.config({ 
  cloud_name: process.env.Cloudinary_CloudStorage_Name, 
  api_key: process.env.Cloudinary_CloudStorage_ApiPrivate_Key, 
  api_secret: process.env.Cloudinary_CloudStorage_APISecret_Key
});

async function fileUpload(fileURL) {
  try {
    if (!fileURL) {
      console.log("file path is"+fileURL);
      
    }
    cloudinaryImgres = await cloudinary.v2.uploader.upload(fileURL,{
      resourceType : "auto"
    })

    console.log("uploaded"+cloudinaryImgres)
    
  } catch (error) {
    fs.unlink(fileURL)
    
  }
  return;
}

module.exports = fileUpload