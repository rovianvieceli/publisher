import React from 'react';
import Navbar from './Components/Navbar/navbar';
import List from './Components/List/list';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className='App'>
          <Navbar/>
          <List />
        </div>
      </div>
    )
  }
}