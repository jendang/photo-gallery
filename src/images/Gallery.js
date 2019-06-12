import React from 'react'
import './Gallery.css'
import Modal from '../Modal/Modal'


class Gallery extends React.Component {
    state = {
        currentIndex: null,
        modal: false
    }

    selectModal = (info, index) => {
        this.setState({
            modal: !this.state.modal,
            currentIndex: index
        }) 
    }
      
    renderImageContent(src, index) {
        return (
          <div className="image-block" onClick={(e) => this.selectModal(e, index)} key={index}>
            <img src={src.url.thumb} className="img-thumb" alt={src.id}/>
          </div>
        ) 
    }

    render(){
        const { images } = this.props
        const { currentIndex } = this.state
        return (
            <div>
                <div className="gallery">
                    {(currentIndex !== null && this.state.modal) &&
                    <Modal 
                                    closeModal={this.selectModal}
                                    displayModal={this.state.modal}
                                    image={images[this.state.currentIndex]}
                    />}
                    {images.map((image,index) => this.renderImageContent(image,index))}
                </div>
            </div>
        ) 

    }
}

export default Gallery