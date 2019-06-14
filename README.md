[![Netlify Status](https://api.netlify.com/api/v1/badges/8b6b314b-ab33-45a7-a36e-10bffc57f02a/deploy-status)](https://app.netlify.com/sites/unplash-photo-gallery/deploys)

# :sparkles: Photo Gallery :sparkles::eyes::eyes:

## :tada::tada::point_right: [Checkout the deployed version here! ](https://unplash-photo-gallery.netlify.com/) :point_left::tada::tada:

## What is this project about :exclamation: :question:

Creating a grid of thumbnails for photos from Unplash APIs. You can also search photos with key words as well. 


## Table of contents

* Technologies used
* Installation  
* Features can add with pull requests
* APIs/Packages references

## Technologies used

### Front-end

* [React](https://github.com/facebook/create-react-app)
* [Semantic UI](https://semantic-ui.com/)
* [Material-icons](https://material-ui.com/components/icons/)


## Installation

1. Before clone the project, please go to [Unplash APIs](https://unsplash.com/documentation#public-actions) to obtain the client_id for authorization.

* create .env file int he root of project folder
* content of .env file:

```javascript

    REACT_APP_CLIENT_ID="YOUR_ACCESS_KEY"

    //Example

    REACT_APP_CLIENT_ID="123456"


```
* Testing your client_id

```javascript

    https://api.unsplash.com/photos/?client_id="YOUR_ACCESS_KEY"
    
    //Example

    https://api.unsplash.com/photos/?client_id="123456"

```

2. Clone or download the project [here](https://github.com/jendang/photo-gallery)


```javascript

cd projectFolder

npm install

npm start

```


## Features can add with pull requests

* Sorting grid such as by user, collection, lastest, oldest...
* Next and Prev button when click to the thumbnail


## APIs/Packages references

* [Unplash APIs](https://unsplash.com/documentation)

For more information about this project, please feel free to [contact me](https://www.linkedin.com/in/jennydang/)


