import { useCallback, useState } from "react"
import { FileError, FileRejection, useDropzone } from "react-dropzone"

export interface UploadableFile {
  file: File;
  errors: FileError[];
}


export function MultiFileUploadField() {
  const [files, setFiles] = useState([]);
  const onDrop = useCallback((accFiles: File[], rejFiles: FileRejection[]) => {
    const mappedAcc = accFiles.map(file => ({ file, errors: []}));

    setFiles(curr => [...curr, ...mappedAcc, ...rejFiles])
  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
        {JSON.stringify(files)}
    </div>
  )
}