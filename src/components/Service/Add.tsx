import React from 'react'
import CreateServiceModal from '../Modal/CreateService';
import Modal from '../Modal/Modal'

interface Props {
  
}

const AddService: React.FC<Props>  = () => {
  return (
    <CreateServiceModal>
      <form action="">
        <div className="create__service">
          <div className="create__service__header">
            <h4>Create Service</h4>
          </div>
          <div className="create__service__body">
            <form action="">
              <div className="__service__cover__upload">
                <img src="https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image.png" alt="" />
              </div>
              <div className="create__service__contents">
                <div className="__service__profile__upload">
                  <img src="https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image.png" alt="" />
                </div>
               
              
                <div className="__service__content__fileds">
                  <div className="service__form__control">
                    <h5>Name:</h5>
                    <input type="text" placeholder="Enter Service name..."/>
                  </div>
                  
                  <div className="service__form__control">
                    <h5>Contact:</h5>
                    <input type="text" placeholder="Enter Service name..."/>
                  </div>

                  <div className="service__form__control">
                    <h5>Description:</h5>
                    <input type="text" placeholder="Enter Service name..."/>
                  </div>

                  <div className="service__form__control">
                    <h5>Category:</h5>
                    <input type="text" placeholder="Enter Service name..."/>
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