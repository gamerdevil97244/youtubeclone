import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs'

cloudinary.config({ 
  cloud_name: process.env.Cloudinary_CloudStorage_Name, 
  api_key: process.env.Cloudinary_CloudStorage_ApiPrivate_Key, 
  api_secret: process.env.Cloudinary_CloudStorage_APISecret_Key
});

cloudinary.uploader
  .upload("my_image.jpg")
  .then(result=>console.log(result));