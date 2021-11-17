import React, {useCallback, useContext, useState} from 'react'
import CreateServiceModal from '../Modal/CreateService';


import {useDropzone} from 'react-dropzone';

interface Props {
  userId: string
}

export const categories = [
  { value: "ocean1", label: "Ocean" },
  { value: "blue", label: "Blue" },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red" },
  { value: "orange", label: "Orange" },
  { value: "yellow", label: "Yellow" },
  { value: "green", label: "Green" },
  { value: "forest", label: "Forest" },
  { value: "slate", label: "Slate" },
  { value: "silver", label: "Silver" }
];

const AddService: React.FC<Props>  = ({ userId }) => {
  const {getRootProps, getInputProps, open, acceptedFiles} = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true
  });
  
  const [cover,  setCover] = useState(null);
  const [logo,  setLogo] = useState(null);

  return (
    <CreateServiceModal>
      <form action="">
        <div className="create__service">
          <div className="create__service__header">
            <h4>Create Service</h4>
            <pre>{userId}</pre>
          </div>
          <div className="create__service__body">
            <form action="">
              <div className="__service__cover__upload">
                <div {...getRootProps({className: 'dropzone'})}>
                  <input {...getInputProps()} />
                  <button type="button" onClick={open}>
                    <img src="https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image.png" alt="" />
                  </button>
                </div>                
              </div>
              <div className="create__service__contents">
                <div className="__service__profile__upload">
                  <div {...getRootProps({className: 'dropzone'})}>
                    <input {...getInputProps()} />
                    <button type="button" onClick={open}>
                      <img src="https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image.png" alt="" />
                    </button>
                  </div> 
                </div>
               
              
                <div className="__service__content__fileds">
                  <div className="service__form__control">
                    <h5>Name:</h5>
                    <input type="text" placeholder="Enter Service name..."/>
                  </div>
                  
                  <div className="service__form__control">
                    <h5>Contact:</h5>
                    <input type="text" placeholder="Enter Service Contact..."/>
                  </div>

                  <div className="service__form__control">
                    <h5>Description:</h5>
                    <textarea
                      placeholder="Provide your brand service...?" 
                      name="description"
                      cols={70} rows={5}></textarea>
                  </div>

                  <div className="service__form__control">
                    <h5>Category:</h5>
                    <input type="text" placeholder="Select Categroy brand service..."/>
                    
                  </div>

                  <div className="service__form__control">
                    <h5>Access Current Locaton:</h5>
                    <span>Open Map</span>
                  </div>
                </div>
              </div>
              
              <div className="create__bottom__acctions">
                <button>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </form>
    </CreateServiceModal>
  )
}

export default AddService;  