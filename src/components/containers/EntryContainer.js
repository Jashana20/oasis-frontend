import React from 'react'
import EntryCard from '../presentational/EntryCard'

class EntryContainer extends React.Component{
    render(){
        return(
            <div>
                <h1>All your entries:</h1>
                <EntryCard />
            </div>
        )
    }
}

export default EntryContainer