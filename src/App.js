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
   
  
        
  
//  component and api call for the actaul seached keyword
    actualSearch = (searched="coffee") =>{  
  
      this.setState({
        searched: searched,
        loading:true 
              
      })
  
      fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searched}&per_page=24&format=json&nojsoncallback=1`)
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
     }
      
// renders searches. uses switch to only return the first match vs all matches. Uses browserRouter so it has  access to the history .
  render() { 
   return (
      <BrowserRouter>
      <div>
        
       <div className="main-Header" >
   
   
      
           <Switch>
           <Route  path="/" component={() =><div> <Header onSearch={this.actualSearch}/> <PhotoList title={this.state.userSearch}/></div> }/>
             <Route path ="/search" render ={() => <PhotoList title= {this.state.actualSearch} />} />
             
        
            <Route  path="/pitbulls" render ={() => <PhotoList title={this.state.userSearch} /> }/>
            <Route  path="/pizza" render ={() => <PhotoList title={this.state.userSearch} /> } />
             <Route  path="/theoffice" render ={() => <PhotoList title={this.state.userSearch} /> }/>
             </Switch>
             </div>
         </div>
     
      </BrowserRouter>
     )
     
   }
 
       }
       
 // exports the entire component 
 export default App;