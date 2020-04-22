import React from 'react';
import './App.css';
import MainPage from './components/MainPage';
import Account from './components/Account';

class App extends React.Component{
  render(){
    return(
      <div>
        <Account />
        <MainPage />
      </div>
    )
  }
}

export default App;
