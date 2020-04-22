import React from 'react'
import PromptContainer from './containers/PromptContainer'

class EntryForm extends React.Component{
    render(){
        return(
            <div>
                <h1>Start Writing...</h1>
                <PromptContainer />           
            </div>
        )
    }
}

export default EntryForm