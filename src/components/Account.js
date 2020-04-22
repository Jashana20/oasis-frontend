import React from 'react'
import LoggedInMainPage from './LoggedInMainPage'

class Account extends React.Component{

    state = {
        loggedIn: false
    }

    handleLogIn = () => {
        this.setState({loggedIn: !this.state.loggedIn})
    }

    render(){
        return(
            <div>
                <h1>log in/sign up:</h1>
                   {this.state.loggedIn ? (
                       <div>
                           <button>entries</button>
                           <button>mood</button>
                           <button>sign out</button>
                           <br />
                           <LoggedInMainPage />
                       </div>
                   ) : (
                       <div> 
                        <button onClick={this.handleLogIn}>Create Account</button>
                        <button onClick={this.handleLogIn}>Log In</button>
                       </div>
                   )} 
            </div>
        )
    }
}

export default Account