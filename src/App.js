import React from 'react'
import axios from 'axios'
import { clientId } from './api/unplash'
import './App.css'
import Gallery from './images/Gallery'


const baseUrl = "https://api.unsplash.com"

class App extends React.Component {
  state = {
    images: [],
    isLoading: false,
    
  }
  
  fetchingImages = queryValue => {
    this.setState({ isLoading: true })
    const response = axios.get(`${baseUrl}/search/photos/?per_page=20&query=${queryValue}&client_id=${clientId}`)
                          .then(response => response.data)
                          .then(data => this.setState({ images: data.results, isLoading: false }))
                          .catch(err => console.error(err))
    return response

  }
  
  componentDidMount() {
    this.fetchingAllImages()
  }

  fetchingAllImages = () => {
    this.setState({ isLoading: true })
    const response = axios.get(`${baseUrl}/photos/?per_page=20&client_id=${clientId}`)
                          .then(response => response.data)
                          .then(data => this.setState({ images: data, isLoading: false }))
                          .catch(err => console.error(err))
    return response

  }

  onInitialSearch = (e) => {
    e.preventDefault()
    const { value } = this.input
    if(value === ''){
      return
    } 
    this.fetchingImages(value)
    e.currentTarget.reset()

  }

  render(){
    return (
      <div>
        <div className="header">
          <h1>Beautiful Gallery</h1>
          <form type="submit" onSubmit={this.onInitialSearch} className="form-search">
            <i className="material-icons">search</i>
            <input 
                type="text" 
                ref={node => this.input = node} 
                placeholder="trending searches: flowers, love, background, food ..."
            />
          </form>
        </div>
        <div>
          {this.state.isLoading
          ? <div className="ui large active centered loader"></div>
          : <Gallery images={this.state.images} />
          }
          
        
        </div>
        
      </div>
    )

  }
}

export default App;
