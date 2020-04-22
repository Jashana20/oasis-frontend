import React from 'react'
import EntryForm from './EntryForm'
import EntryContainer from './containers/EntryContainer'
import MoodChart from './containers/MoodChartContainer'

class LoggedInMainPage extends React.Component{

    state = {
        showEntryForm: false,
        showAllEntries: false
    }

    handleShowEntryForm = () => {
        this.setState({showEntryForm: !this.state.showEntryForm})
    }

    handleShowAllEntries = () => {
        this.setState({showAllEntries: !this.state.showAllEntries})
    }

    render(){
        return(
            <div>
                {this.state.showAllEntries && (
                    <div>
                        <EntryContainer />
                        <MoodChart />
                    </div>
                )}
                {this.state.showEntryForm ? (
                    <div>
                    <EntryForm showAllEntries={this.handleShowAllEntries} />
                    </div>
                ) : <button onClick={this.handleShowEntryForm}>Write a new entry</button> }
            </div>
        )
    }
}

export default LoggedInMainPage