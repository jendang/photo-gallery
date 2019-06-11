import React from 'react'
import './Image.css'

class Image extends React.Component {
    state = {
        openImage: false,
        mouseOver: false
    }

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
				width: '80vw',
				height: '80vw',
                position: 'absolute',
                // top:0,
                // left:0,
				top: '50%',
				left: '50%',
				margin: '0',
				marginTop: '-75%',
				marginLeft: '-33%',
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
        return (
            <div className="tile">
				<img
                    key={image.id}
					onMouseEnter={this.handleMouseEnter}
					onMouseLeave={this.handleMouseLeave}
					onClick={this.handleClickedImage}
					src={image.urls.thumb}
					alt={image.id}
					style={tileStyle}
				/>
			</div>
        )
    }
}

export default Image