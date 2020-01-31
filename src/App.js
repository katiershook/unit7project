// imports neccessary things
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


// creates component and  empty arrays for searches
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
   
  // uses 3 api fetches while interpolating the api key  to get back results  for the pre set buttons  buttons 
      performSearch = () => {
        
        fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=dwight+shrute&per_page=24&format=json&nojsoncallback=1`)
        .then(response => response.json())
        .then(responseData=> {
          this.setState({
            dwight: responseData.photos.photo
          })
        })
      
        fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=pizza&per_page=24&format=json&nojsoncallback=1`)
        .then(response => response.json())
        .then(responseData=> {
          this.setState({
            pizza: responseData.photos.photo
          })
        })

        fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=pitbull+dogs&per_page=24&format=json&nojsoncallback=1`)
        .then(response => response.json())
        .then(responseData=> {
          this.setState({
            pitbulls: responseData.photos.photo
          })
        })
      }
//  component and api call for the actaul seached keyword
    actualSearch = (searched) =>{  
  
      this.setState({
        searched: searched,
        loading:true 
              
      })
      // console.log(searched, "maybe")
      fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searched}&per_page=&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(responseData=> {
      this.setState({
        userSearch: responseData.photos.photo,
        searched: searched,
        loading: false
      })
    })
  
  }
  componentDidMount() {
    this.actualSearch();
    this.performSearch();
 
         }
      
// renders searches. uses switch to only return the first match vs all matches. Uses browserRouter so it has  access to the history .
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
    
     </BrowserRouter>
    )
    
  }

      }
// exports the entire component 
export default App;