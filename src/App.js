import React, {Component} from 'react';
import Header from "./Components/Header"

import apiKey from './Config'
import { 
  BrowserRouter, 
  Route,
  Switch,
 } from 'react-router-dom';
import './App.css';
import PhotoList from "./Components/PhotoList"



class App extends Component {
constructor () {
  super();
  this.state= {
    dwight: [],
    pizza:[],
    pitbulls:[],
    userSearch: [],
    searched:"",
    loading: true
    }
  }

      performSearch = () => {
        
        fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=dwight+shrute&per_page=&format=json&nojsoncallback=1`)
        .then(response => response.json())
        .then(responseData=> {
          this.setState({
            dwight: responseData.photos.photo
          })
        })
      
        fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=pizza&per_page=&format=json&nojsoncallback=1`)
        .then(response => response.json())
        .then(responseData=> {
          this.setState({
            pizza: responseData.photos.photo
          })
        })

        fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=pitbull+dogs&per_page=&format=json&nojsoncallback=1`)
        .then(response => response.json())
        .then(responseData=> {
          this.setState({
            pitbulls: responseData.photos.photo
          })
        })
      }

    actualSearch = (searched) =>{  
  
      this.setState({
        searched: searched,
        loading:true 
              
      })
      console.log(searched, "maybe")
      fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searched}&per_page=&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(responseData=> {
      this.setState({
        userSearch: responseData.photos.photo,
        searched: this.searched,
        loading: true
      })
    })
  
  }
  componentDidMount() {
    this.performSearch();
    this.actualSearch();
         }
      

  render() { 
   return (
      <BrowserRouter>
      <div>
      
       <div className="main-Header" >
     
           <Route  path="/" component={() => < Header onSearch={this.actualSearch}/> }/>
          <Switch>
            <Route path ="/search" render ={() => <PhotoList title= {this.state.userSearch} />} />
       
           <Route  path="/pitbulls" render ={() => <PhotoList title={this.state.pitbulls} /> }/>
           <Route  path="/pizza" render ={() => <PhotoList title={this.state.pizza} /> } />
            <Route  path="/theoffice" render ={() => <PhotoList title={this.state.dwight} /> }/>
            </Switch>
            </div>
        </div>
        {/* <SearchForm onSearch={this.performSearch} /> */}
     </BrowserRouter>
    )
    
  }

      }

export default App;