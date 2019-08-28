
import React, { Component } from 'react';
import CardList from '../src/component/Card-list/CardList';
//import SearchBox from './component/Search-bar/SearchBox';
import './App.css';

export class App extends Component {
  
  
  
  constructor() {
    super();
 
     this.state = {
       monsters: [],
       searchField: ''
     }
    };
   
  
    
    componentDidMount(){
      //Fetch teh JSON data and put the data into the monster list
      fetch('https://digimon-api.herokuapp.com/api/digimon').then(response => response.json())
      .then(digimon => this.setState({monsters: digimon}))
  
    }
 
    


    //Everything goes here
  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()));
    
    return (
      
      <div className="App">
      
        <input type="search" onChange={e => {this.setState({searchField: e.target.value}, () => console.log(this.state))}} placeholder="search monster"/> 
       
      
        <CardList monsters={filteredMonsters}>
        </CardList>
      </div>
    );
  }


}

export default App;



