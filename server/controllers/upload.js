// Importing dotenv for the API Keys
require("dotenv").config(); 

// Importing the path module (in-built)
const path = require('path');

// Importing the file system module to rename/handle files on the server (in built)
const fs = require('fs');

// To get the mimetype from the file (install)
const mime = require('mime-types');

// Importing AWS S3 client
const {S3Client, PutObjectCommand} = require('@aws-sdk/client-s3');
// AWS S3 Bucket
const bucket = 'aditya-smartbookswap-final-year-project';

// Uploading photos to AWS S3
async function uploadToS3(path, originalFilename, mimetype) {
    const client = new S3Client({
        region: 'ap-south-1',
        credentials: {
            accessKeyId: process.env.S3_ACCESS_KEY,
            secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
        },
    });
    const parts = originalFilename.split('.');
    const ext = parts[parts.length - 1];
    const newFilename = Date.now() + '.' + ext;

    const data = await client.send(new PutObjectCommand({
        Bucket: bucket,
        Body: fs.readFileSync(path),
        Key: newFilename,
        ContentType: mimetype,
        ACL: 'public-read'
    }));
    return `https://${bucket}.s3.amazonaws.com/${newFilename}`;
};

// All controllers
exports.postUpload = async(req, res) => {
    const uploadedFiles = [];
    for(let i=0; i<req.files.length; i++) {
        const {path, originalname, mimetype} = req.files[i]; // path contains the path, originalname contains the extension of the photo
        const url = await uploadToS3(path, originalname, mimetype);
        uploadedFiles.push(url);
    }
    res.json(uploadedFiles);
}