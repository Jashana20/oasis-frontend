import React from 'react'
import EntryForm from './EntryForm'
import EntryContainer from './containers/EntryContainer'
import MoodChart from './containers/MoodChartContainer'

class LoggedInMainPage extends React.Component{
    render(){
        return(
            <div>
                <h1>Logged in!</h1>
                <EntryForm />
                <EntryContainer />
                <MoodChart />
            </div>
        )
    }
}

export default LoggedInMainPage