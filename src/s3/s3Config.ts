export const s3Config = {
  bucketName:  process.env.AWS_BUCKET_NAME,
  dirName: 'screams',      /* Optional */
  region: 'ap-southeast-1',
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  s3Url: 'https:/your-aws-s3-bucket-url/'     /* Optional */
}
