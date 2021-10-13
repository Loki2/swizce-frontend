import React, { useEffect, useState } from "react"

export interface UploadItemsProps {
  file: File;
}


export function UploadItems({ file }: UploadItemsProps){
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    async function upload() {
      const url = await UploadFile(file, setProgress);

      console.log('url', url)
    }

    upload();
  }, []);
  return <div className="list__upload__item">
    SFL-{progress}
  </div>
}

function UploadFile(file: File, onProgress: (percentage: number) => void){
  const url = 'https://api.cloudinary.com/v1_1/swizce/image/upload';
  const key = 'doc_upload_example_us_preset'
  return new Promise((res, rej) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);

    xhr.onload = () => {
      const resp = JSON.parse(xhr.responseText);
      res(resp.secure_url);
    }

    xhr.onerror = (evt) => rej(evt);

    xhr.upload.onprogress = (event) => {
      if(event.lengthComputable) {
        const percentage = (event.loaded/event.total) * 100;
        onProgress(Math.round(percentage))
      }
    }

    const formData = new FormData();

    formData.append('file', file);
    formData.append('upload_preset', key);


    xhr.send(formData)
  })
}
