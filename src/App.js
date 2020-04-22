import React from 'react';
import './App.css';
import MainPage from './components/MainPage';
import Account from './components/Account';

class App extends React.Component{

  state = {
    accountHandling: false
  }
 
  showAccountHandling = () => {
    this.setState({accountHandling: !this.state.accountHandling})
  }

  render(){
    return(
      <div>
        <button onClick={this.showAccountHandling}>LOG IN | SIGN UP</button>
        {this.state.accountHandling ? <Account /> :  <MainPage />}
      </div>
    )
  }
}

export default App;
