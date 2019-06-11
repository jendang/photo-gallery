import React from 'react'
import './Image.css'

class Image extends React.Component {
    state = {
        zoomImage: false,
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
        if(this.state.zoomImage === false){
            return this.setState({ zoomImage: true })
        }else {
            return this.setState({ zoomImage: false })
        }
    }



    render(){
        let tileStyle = {};
		let headerStyle = {};
		let zoom = {};
		// When tile clicked
		if (this.state.zoomImage) {
			tileStyle = {
				width: '62vw',
				height: '62vw',
				position: 'absolute',
				top: '50%',
				left: '50%',
				margin: '0',
				marginTop: '-31vw',
				marginLeft: '-31vw',
				boxShadow: '0 0 40px 5px rgba(0, 0, 0, 0.3)',
				transform: 'none'
			};
		} else {
			tileStyle = {
				width: '18vw',
				height: '18vw'
			};
		}
        return (
            <div className="tile">
				<img
                    key={this.props.image.id}
					onMouseEnter={this.handleMouseEnter}
					onMouseLeave={this.handleMouseLeave}
					onClick={this.handleClickedImage}
					src={this.props.image.urls.thumb}
					alt={this.props.image.id}
					style={tileStyle}
				/>
			</div>
        )
    }
}

export default Image