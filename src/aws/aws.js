const AWS = require('aws-sdk');
require("dotenv").config()


const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  });
  


const uploadFiles = async (file) => {
    
    return new Promise((resolve, reject) => {
        let uploadParams = {
            Bucket: process.env.BUCKETNAME,
            Key:file.originalname,
            Body: file.buffer,
            ContentType: "image/JPG",
        }
        s3.upload(uploadParams,(err, data) =>{
            if (err) {
               
                return reject({ "error": err })
            }else{
            return resolve(data.Location)}
        })
    })
}

module.exports = {
    uploadFiles
}




