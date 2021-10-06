import React, {useContext, useEffect} from "react";
import { useQuery } from '@apollo/client';
import { useForm } from 'react-hook-form';
import Modal from "../Modal/Modal";
import Uploader from "./Upload";
import { Scream, User } from '../../types';


import { AuthContext } from "../../context/AuthContext";

interface Props {
  userId: string
}


//Upload function
const handleImageUploader = () => {
  return <Uploader />
} 

const Create: React.FC<Props> = ({ userId }) => {

  const { loggedInUser } = useContext(AuthContext);

  console.log("user Id from create scream:", userId)

  const { register, errors, handleSubmit } = useForm<Scream>();

  const handleCreateScream = handleSubmit(async ({}) => {

  });

  useEffect(() => {
    
  })



  return (
    <Modal>
      <form onClick={handleCreateScream}>
        <div className="create__header">
          <h4>Create Scream</h4>
        </div>
        {/* Retrived Logged In User */}
        <div className="create__nav">
          <div className="__profile">
            <img src="https://res.cloudinary.com/swizce/image/upload/v1620702350/Swizce/icons/test_roevfj.jpg" alt="" />
          </div>
          <span>@Loki,</span>
          <div className="scream__status">
            status:
          </div>
          <div className="tags__list">
            <span>@feeling, activity, question...? (Category Tags)</span>
          </div>
        </div>

        <div className="create__content">
          <textarea
             placeholder="What is your mind scream...?"
             name="desc"
             cols={70} 
             rows={7} 
             maxLength={515}             
            ></textarea>
            <br />            
            <span className="textarea__count">0/515(Charecters)</span>
            <br />
            <hr />
            <br />
            <div className="uploader__media">
              <p>Add to scream</p>
              <div className="addmore__actions">
                <a>
                  <i className="ti-music" onClick={() => console.log("click Me For Soudtrack Upload File")} />
                </a>
                <a type="files">
                <i className="ti-image" onClick={() => console.log("click Me For Images Upload File")} />
                </a>
                <a>
                <i className="ti-files" onClick={() => console.log("click Me For Documents Upload File")} />
                </a>
                <a>
                <i className=" ti-location-arrow" onClick={() => console.log("click Me For checkin Location")} />
                </a>
                <a>
                <i className="ti-rss-alt" onClick={() => console.log("click Me For Sound Upload File")} />
                </a>
              </div>
            </div>
          </div><br />
          <div className="create__footer">
            <button type="submit">Spread</button>
          </div>
      </form>
    </Modal>
  );
};

const styles = {
  errorMessage: {
    margin: 0, 
    padding: 0, 
    color: 'red', 
    fontSize: '.7rem'
  },
  btn__submit: {
    
  }

}

export default Create;
