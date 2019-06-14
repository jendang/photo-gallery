import React from 'react'
import axios from 'axios'
import './App.css'
import Gallery from './images/Gallery'


const baseUrl = "https://api.unsplash.com"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [],
      isLoading: false,
      error: false,
      totalPage: 20,
      
    }

    //infinite scroll for 200 items
    window.onscroll = () => {
      const {fetchingAllImages,
        state: {
          error,
          isLoading,
        }
      } = this

      if(error || isLoading ) return

      if(window.innerHeight + document.documentElement.scrollTop 
        === document.documentElement.offsetHeight ){
          fetchingAllImages()
        }
    }
  }

  fetchingAllImages = () => {
    this.setState({ isLoading: true })
    let currentPage = 1
    let data = []
    while(currentPage <= this.state.totalPage){
      currentPage++
      const response = axios.get(`${baseUrl}/photos/?page=${currentPage}&per_page=30&client_id=${process.env.REACT_APP_CLIENT_ID}`)
                            .then(response => response.data)
                            .then(data => {
                              const nextImages = data.map(image => ({
                                id: image.id,
                                url: image.urls
                              }))
                              this.setState({ 
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
      
      data = response

    }
    return data

  }

  /* Getting total pages from APIs */ 

  // fetchStatsTotal = () => {
  //   const limitPerPage = 30
  //   const response = axios.get(`${baseUrl}/stats/total/?client_id=${process.env.REACT_APP_CLIENT_ID}`)
  //                         .then(response => response.data)
  //                         .then(results => {
  //                           this.setState({
  //                             totalPage: Math.ceil(parseInt(results.total_photos)/limitPerPage)
  //                           })

  //                         })
  //                         .catch(err => console.error(err))
    
    
  //   return response
  // }
  
  componentDidMount() {
    this.fetchingAllImages()
    //this.fetchStatsTotal()
  }
  
  fetchingImagesSearch = queryValue => {
    this.setState({ isLoading: true, images: [] })
    let currentPage = 1
    let data = []
    while(currentPage <= this.state.totalPage){
      currentPage++
      const response = axios.get(`${baseUrl}/search/photos/?per_page=30&query=${queryValue}&client_id=${process.env.REACT_APP_CLIENT_ID}`)
                            .then(response => response.data.results)
                            .then(data => {
                              const searchImages = data.map(image => ({
                                id: image.id,
                                url: image.urls
                              }))

                              this.setState({ 
                                isLoading: false,
                                images: 
                                [...this.state.images, ...searchImages] 
                              })

                            })
                            .catch(err => this.setState({ error: err.message, isLoading: false }))
      data =  response

    }
    return data

  }
  
  onInitialSearch = (e) => {
    e.preventDefault()
    const { value } = this.input
    if(value === ''){
      return
    } 
    this.fetchingImagesSearch(value)
    e.currentTarget.reset()

  }

  render(){
    const { error, isLoading, images } = this.state
    //console.log(images.length)
    //console.log(this.state.totalPage)
    return (
      <div>
        <div className="header">
          <h1>Beautiful Gallery</h1>
          <div className="form-search">
            <i className="material-icons">search</i>
            <form type="submit" onSubmit={this.onInitialSearch}>
              <input 
                  type="text" 
                  ref={node => this.input = node} 
                  placeholder="trending searches: flowers, love, background, food ..."
              />
            </form>
          </div>
        </div>
        <div className="content">
          
            {isLoading
            ? <div className="ui large active centered loader"></div>
            : <Gallery images={images} />
            }

            {error && 
              <div style={{ color: '#900' }}>{error}</div>
            }

            {images.length >= 500 && <div>You reached the end!!</div>}
          
        </div>
        
      </div>
    )

  }
}

export default App;
