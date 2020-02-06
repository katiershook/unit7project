// imports neccessary things
import React, {Component} from 'react';
import { 
  BrowserRouter, 
  Route,
  Switch,

 } from 'react-router-dom';
import './App.css';
import axios from 'axios'
import apiKey from './Config'
import Header from './Components/Header'

import SearchForm from './Components/SearchForm'
import PhotoList from "./Components/PhotoList"
import Nav from './Components/Nav';
import NotFound from './Components/NotFound';



// creates component and  empty arrays for searches
class App extends Component {
constructor () {
  super();
  this.state= {
    photos: [],
    query: ' ',
    loading: true,

    coffee:{
      photos:[],
      loading:true
    },
    pizza:{ 
      photos:[],
      loading:true
  }, 
  pitbulls:{ 
    photos:[],
    loading:true
  },
  dwight :{ 
    photos:[],
    loading:true
  }
 };
}
   

//  component and api call for the actaul seached keywor
  componentDidMount() {
      this.actualSearch();
    
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=coffee&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        let coffee = {...this.state.coffee};
        coffee.photos = response.data.photos.photo;
        coffee.loading = false;
        this.setState({coffee});
      })

    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=pizza&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      let pizza = {...this.state.pizza};
      pizza.photos= response.data.photos.photo;
      pizza.loading= false;
      this.setState({pizza});
    })


    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=pitbulls&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      let pitbulls = {...this.state.pitbulls};
      pitbulls.photos= response.data.photos.photo;
      pitbulls.loading= false;
      this.setState({pitbulls});
    })

    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=dwight+schrute&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      let dwight = {...this.state.dwight};
      dwight.photos= response.data.photos.photo;
      dwight.loading= false;
      this.setState({dwight});
    })  
  }
    actualSearch = (query ="coffee") =>{  
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        photos: response.data.photos.photo,
        loading: false,
        title: query
      })      
    })
    .catch(error=>{
      console.log('yikes dude', error);
    });
  }


  render() { 
   return (
      <BrowserRouter>
        <div className="container" >
        < Header />
          <SearchForm  onSearch ={this.actualSearch} />
           <Nav/>
           <Switch>
             <Route  exact path="/" render ={ ()=> <PhotoList data ={this.state.coffee.photos} /> }/>
            <Route  path="/pitbulls" render ={() => <PhotoList data ={this.state.pitbulls.photos} loading= {this.state.pitbulls.loading}/> }/>
            <Route  path="/pizza" render ={() => <PhotoList data={this.state.pizza.photos} 
            loading= {this.state.pizza.loading}
            /> } />
             <Route  path="/theoffice" render ={() => <PhotoList data={this.state.dwight.photos} loading= {this.state.dwight.loading}
             /> }/>
             <Route path = "/search/:query"render ={() => <PhotoList data={this.state.photos} loading= {this.state.loading}
             /> }/>
             <Route component = {NotFound}/>
             </Switch>
          </div>
      </BrowserRouter>
     );
     
   }

 
  }

 // exports the entire component 
 export default App;