import React from 'react'

class Gallery extends React.Component {

    render(){
        return (
            <div>
                {this.props.images.map(image => {
                    return <img key={image.id} src={image.urls.thumb} alt={image.id} />
                })}
            </div>
        )
    }
}

export default Gallery