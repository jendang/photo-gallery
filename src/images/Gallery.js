import React from 'react'
import Image from './Image'

class Gallery extends React.Component {

    render(){
        return (
            <div className="gallery">
                {this.props.images.map(image => {
                    return <Image key={image.id} image={image}/>
                })}
            </div>
        )
    }
}

export default Gallery