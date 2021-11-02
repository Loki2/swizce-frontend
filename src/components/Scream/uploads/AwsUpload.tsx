import React, { useEffect, useState } from 'react';
import AWS from 'aws-sdk';

const s3Client = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESSKEY
  
})

interface FileItemProps {
  file: File;
}

export function AwsUpload({file}: FileItemProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    async function upload() {
      const url = await UploadFile(file, setProgress);

      console.log("Located file url:", url);
    }

    upload();
  }, []);

  return <div className="list__uploaded__items">

  </div>
}


//Create function upload file
function UploadFile(file: File, onProgress: (percentage: number) => void) {
  //config aws s3

  //upload to aws s3

  //response url back to forms
}