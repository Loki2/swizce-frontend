import React from 'react'
import Modal from '../Modal/Modal'

interface Props {
  
}

const AddService: React.FC<Props>  = () => {
  return (
    <Modal>
      <form action="">
        <div className="create__service">
          <div className="create__service__header">
            <h4>Create Service</h4>
          </div>
        </div>
      </form>
    </Modal>
  )
}

export default AddService;