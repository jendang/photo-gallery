import React from 'react'

class GalleryModal extends React.Component {
    state = {
        isOpen: false
    }
    // constructor() {
    //   super();
    //   this.handleKeyDown = this.handleKeyDown.bind(this);
    // }
    // componentDidMount() {
    //   document.body.addEventListener('keydown', this.handleKeyDown);
    // }  
    // componentWillUnMount() {
    //   document.body.removeEventListener('keydown', this.handleKeyDown);
    // }
    // handleKeyDown(e) {
    //   if (e.keyCode === 27)
    //     this.props.closeModal();
    //   if (e.keyCode === 37 && this.props.hasPrev)
    //     this.props.findPrev();
    //   if (e.keyCode === 39 && this.props.hasNext)
    //     this.props.findNext();
    // }

    render () {
      const { closeModal, hasNext, hasPrev, findNext, findPrev, images, index } = this.props;
    //   if (!src) {
    //     console.log('whut')
    //     return null;
    //   }

      return (
        <div>
        
          {!this.state.isOpen && <div className="modal-overlay" onClick={closeModal}></div>}
          {this.state.isOpen && 
            <div className="modal">
                <div className='modal-body'>
                <a href="#" className='modal-close' onClick={closeModal} onKeyDown={this.handleKeyDown}>&times;</a>
                {hasPrev && <a href="#" className='modal-prev' onClick={findPrev} onKeyDown={this.handleKeyDown}>&lsaquo;</a>}
                {hasNext && <a href="#" className='modal-next' onClick={findNext} onKeyDown={this.handleKeyDown}>&rsaquo;</a>}
                <img src={images.map(image => image.urls.thumb[index])} />
                </div>
            </div>
          
        
          }
        </div>
      )
    }
}

export default GalleryModal