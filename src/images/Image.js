import React from 'react'
import './Image.css'
import Modal from '../Modal/Modal'

class Image extends React.Component {
    state = {
        openImage: false,
        mouseOver: false,
        // modal: false
    }

    // selectModal = (info) => {
    //     this.setState({modal: !this.state.modal}) // true/false toggle
    // }

    handleMouseEnter = (e) => {
        e.preventDefault()
        if(this.state.mouseOver === false){
            return this.setState({ mouseOver: true })
        }
    }

    handleMouseLeave = (e) => {
        e.preventDefault()
        if(this.state.mouseOver === true){
            return this.setState({ mouseOver: false })
        }
    }

    handleClickedImage = (e) => {
        e.preventDefault()
        if(this.state.openImage === false){
            return this.setState({ openImage: true })
        }else {
            return this.setState({ openImage: false })
        }
    }



    render(){
        let tileStyle = {};
		// When image clicked
		if (this.state.openImage) {
			tileStyle = {
				width: '60vw',
				height: '60vw',
                position: 'absolute',
                // top:0,
                // left:0,
				top: '50%',
				left: '50%',
				margin: '0',
				marginTop: '-25%',
				marginLeft: '-31%',
				boxShadow: '0 0 40px 5px rgba(0, 0, 0, 0.3)',
				transform: 'none'
			};
		} else {
			tileStyle = {
				width: '20vw',
				height: '20vw'
			};
        }
        const { image } = this.props
        // console.log(index)
        return (
            <div className="tile">
				<img
                    // key={src.id}
					// onMouseEnter={this.handleMouseEnter}
					// onMouseLeave={this.handleMouseLeave}
                    // onClick={this.handleClickedImage}
                    
					src={image.urls.thumb}
                    alt={image.id}
                    // className="tileStyle"
					// style={tileStyle}
				/>
                
			</div>
        )
    }
}

export default Image