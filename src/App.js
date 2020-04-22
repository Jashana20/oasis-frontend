import React from 'react';
import './App.css';
import LoggedInMainPage from './components/LoggedInMainPage';
import MainPage from './components/MainPage';

class App extends React.Component{
  render(){
    return(
      <div>
        <LoggedInMainPage />
        <MainPage />
      </div>
    )
  }
}

export default App;
