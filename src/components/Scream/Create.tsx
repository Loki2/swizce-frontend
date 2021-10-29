import React, {useCallback, useContext, useState} from "react";
import { useForm } from 'react-hook-form';
import { useMutation } from "@apollo/client";
import { useRouter } from 'next/router';
import Modal from "../Modal/Modal";
import { CreateScreamArgs, Scream } from '../../types';

// import ReactS3Client from 'react-aws-s3-typescript';
// import { s3Config } from '../../s3/s3Config';


import {FileError, FileRejection, useDropzone} from 'react-dropzone';
import { AuthContext } from "../../context/AuthContext";

import { CREATE_SCREAM } from '../../graphql/Scream';
import Loader from "react-loader-spinner";
import { UploadItems } from "./uploads/Upload";
// import { UploadItems } from "./uploads/UploadItem";

interface Props {
  userId: string
}

export interface UploadableFile {
  file: File;
  errors: FileError[];
}


//Main Create Scream function
const Create: React.FC<Props> = ({ userId }) => {
  const { handleAuthAction, loggedInUser } = useContext(AuthContext);
  const router = useRouter();


  const [files, setFiles] = useState<UploadableFile[]>([]);
  const { register, errors, handleSubmit } = useForm<CreateScreamArgs>();
  const [ createScream, { loading, error }] = useMutation<{ createScream: Scream }, CreateScreamArgs>(CREATE_SCREAM)

  const onDrop = useCallback((accFile: File[], rejFile: FileRejection[]) => {
    const mappedAcc = accFile.map(file => ({file, errors: []}));

    setFiles(curr => [...curr, ...mappedAcc, ...rejFile]);
  }, [])

  const {getRootProps, getInputProps, open} = useDropzone({noClick: true, noKeyboard: true, onDrop });

  console.log("files", files)

  /* Import s3 config object and call the constrcutor */
  // const s3 = new ReactS3Client(s3Config);

  // const fileList = s3.listFiles()

  // console.log(fileList)






  const submitCreateScream = handleSubmit(async ({ description, imageUrl }) => {
    try {
      const results = await createScream({ variables: { description, imageUrl }});

      if(results?.data?.createScream){
        const {createScream} = results.data;

        if(createScream){
          handleAuthAction('close');

          //push user to their dashboard page
          router.push('/Screams')
        }
      }
    } catch (error) {
      console.log(error)
    }
  });



  return (
    <Modal>
      <form onClick={submitCreateScream}>
        <div className="create__header">
          <h4>Create Scream</h4>
        </div>
        {/* Retrived Logged In User */}
        <div className="create__nav">
          <div className="__profile">
            <img src={loggedInUser.profile.profileUrl} alt="" />
          </div>
          <span>{loggedInUser.profile.firstname},</span>
          <div className="scream__status">
            status:
          </div>
          <div className="tags__list">
            <span>@feeling, activity, question...? (Category Tags)</span>
          </div>
        </div>
        {errors.description && <span style={styles.errorMessage} role="alert">{errors.description.message}</span>}
        <div className="create__content">
          <textarea
             placeholder="What is your mind scream...?"
             name="description"
             cols={70} 
             rows={7} 
             maxLength={515}
             ref={register({
               required: "Scream Description required ...!",
               minLength: {
                value: 3,
                message: "Scream Description be at least 3 characters.",
              },
              maxLength: {
                value: 515,
                message: "Scream Description must not be more than 515 characters",
              },
             })}             
            ></textarea>
            <br />            
            <span className="textarea__count">0/515(Charecters)</span>
            <br />
            <hr />
            <br />            
            <div className="uploader__media">
              <div {...getRootProps({className: 'dropzone'})}>
                <input {...getInputProps()} />
                {
                  files.map((fileWrapper, idx) => (
                    <UploadItems key={idx} file={fileWrapper.file} />
                  ))
                }
              </div>            
              <div className="addmore__actions">
                <button type="button" onClick={open}>
                  <i className="ti-image"/>
                </button>
                <button type="button">
                  <i className="ti-music"/>
                </button>
                <button type="button">
                  <i className=" ti-location-arrow"/>
                </button>
                <button type="button">
                  <i className="ti-rss-alt" />
                </button>
              </div>
            </div>
          </div><br />
          <div className="create__footer">
          <button disabled={loading} style={{cursor: loading ? 'not-allowed' : 'pointer'}} type="submit">
            { loading ? <Loader type='Oval' color='white' height={30} width={30} timeout={30000} /> : 'Spread'}
            </button>
            {
              error && <div>{error.graphQLErrors[0]?.message || <p style={styles.errorMessage}>Sorry something went wrong...!</p>}</div>
            }
          </div>
      </form>
    </Modal>
  );
};

const styles = {
  errorMessage: {
    margin: 0, 
    padding: 5, 
    color: 'red', 
    fontSize: '.7rem'
  }
}

export default Create;
