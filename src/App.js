import React from 'react'
import axios from 'axios'
import { clientId } from './api/unplash'
import './App.css'
import Gallery from './images/Gallery'


const baseUrl = "https://api.unsplash.com"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [],
      isLoading: false,
      hasMore: true,
      error: false,
    }

    window.onscroll = () => {
      const {fetchingAllImages,
        state: {
          error,
          isLoading,
          hasMore,
        }
      } = this

      if(error || isLoading || !hasMore ) return

      if(window.innerHeight + document.documentElement.scrollTop 
        === document.documentElement.offsetHeight ){
          fetchingAllImages()
        }
    }
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
    const response = axios.get(`${baseUrl}/photos/?per_page=30&client_id=${clientId}`)
                          .then(response => response.data)
                          .then(data => {
                            const nextImages = data.map(image => ({
                              id: image.id,
                              url: image.urls
                            }))
                            this.setState({ 
                              hasMore: (this.state.images.length <100 ),
                              isLoading: false,
                              images: [
                                ...this.state.images,
                                ...nextImages
                              ],
                            })
                          })
                          .catch(err => {
                            this.setState({ error: err.message, isLoading: false })
                          })
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
    const { error, hasMore, isLoading, images } = this.state
    console.log(this.state.images)
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
        <div className="content">
          
            {isLoading
            ? <div className="ui large active centered loader"></div>
            : <Gallery images={images} />
            }

            {error && 
              <div style={{ color: '#900' }}>{error}</div>
            }

            {!hasMore && 
              <div>You did it! You reached the end!!</div>
            }
          
        </div>
        
      </div>
    )

  }
}

export default App;
