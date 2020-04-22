import React from 'react'
import PromptCard from '../presentational/PromptCard'

class PromptContainer extends React.Component{
    render(){
        return(
            <div>
                <h1>Prompts:</h1>
                <PromptCard />
            </div>
        )
    }
}

export default PromptContainer