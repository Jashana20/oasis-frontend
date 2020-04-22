import React from 'react'
import LoggedInMainPage from './LoggedInMainPage'

class Account extends React.Component{
    render(){
        return(
            <div>
                <h1>log in/sign up:</h1>
                <LoggedInMainPage />
            </div>
        )
    }
}

export default Account