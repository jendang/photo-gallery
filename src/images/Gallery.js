import React from 'react'
import Image from './Image'
import './Gallery.css'

const Gallery = ({ images }) => {
    return (
        <div className="gallery">
            {images.map(image => <Image key={image.id} image={image}/>)}
        </div>
    ) 
}

export default Gallery