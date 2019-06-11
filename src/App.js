import React from 'react'
import axios from 'axios'
import { clientId } from './api/unplash'
import './App.css'
import Gallery from './images/Gallery'

const baseUrl = "https://api.unsplash.com"

class App extends React.Component {
  state = {
    images: []
  }

  componentDidMount() {
    const response = axios.get(`${baseUrl}/photos/?client_id=${clientId}`)
                          .then(response => response.data)
                          .then(data => this.setState({ images: data }))
                          .catch(err => console.error(err))
    return response
  }

  renderImages = () => {
    return (
      <Gallery 
        images={this.state.images}
      />

    )
  }
  render(){
    console.log(this.state)
    return (
      <div>
        {this.renderImages()}
      </div>
    )

  }
}

export default App;
