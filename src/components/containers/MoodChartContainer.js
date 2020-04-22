import React from 'react'
import MoodChartCard from '../presentational/MoodChartCard'

class MoodChart extends React.Component{
    render(){
        return(
            <div>
                <h1>Mood Chart</h1>
                <MoodChartCard />
            </div>
        )
    }
}

export default MoodChart