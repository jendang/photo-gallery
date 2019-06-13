import React from 'react'
import './Modal.css'

const Modal = props => {
    const divStyle = { 
        display: props.displayModal ? 'block' : 'none'
    }

    function closeModal(e) {
      e.stopPropagation()
      props.closeModal()
    }

    // console.log(props.image.urls)
    return (
     <div className="modal" onClick={ closeModal } style={divStyle}>
       <div className="modal-content" onClick={ e => e.stopPropagation() }>
            <span className="close" onClick={ closeModal }>&times;</span>
            <img className="imageModal" src={props.image.url.regular} alt=""/>
       </div>
     </div>
    )
}
export default Modal;