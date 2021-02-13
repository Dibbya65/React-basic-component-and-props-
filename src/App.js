import React, { Component } from 'react';
import Monsters from './components/Monsters/Monsters';
import './App.css';
import SearchBox from './components/SearchBox/SearchBox';

export default class App extends Component {
  state = {
    monsters: [],
    searchField: '',
  };
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        this.setState({ monsters: users });
      });
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    return (
      <div className='App'>
        <h1>Monster Rolodex</h1>
        <SearchBox
          type='search'
          name='searchField'
          placeholder='search monster'
          id='searchField'
          handleChange={this.handleChange}
        />
        <Monsters monsters={this.state.monsters}></Monsters>
      </div>
    );
  }
}
