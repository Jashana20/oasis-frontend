import React from 'react'
import PromptContainer from './containers/PromptContainer'

class EntryForm extends React.Component{
    render(){
        return(
            <div>
                <h1>Todays Entry:</h1>
                <form>
                    <textarea type="text" placeholder="Start writing..."/>
                    <br />
                </form>
                <button onClick={this.props.showAllEntries}>Save + Reflect</button>
                <PromptContainer />           
            </div>
        )
    }
}

export default EntryForm