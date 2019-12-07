import React, { Component } from 'react'
import Axios from 'axios'
import RocketCard from './RocketCard'
import './rocketlist.css'


export default class RocketList extends Component {
    state={
        url: 'https://api.spacexdata.com/v3/rockets',
        rockets: null
    }

    async componentDidMount() {                           //async means this will run in the background and everything can run while it loads.
      const res = await Axios.get(this.state.url)
      this.setState({ rockets: res.data })
      console.log(this.state.rockets)
    }
    
    render() {
        return (
          <React.Fragment>
             <hr className="thin-line"></hr>
            <h3 className="rockets-title">ROCKETS</h3>
            {this.state.rockets ? (
            <div>
              {this.state.rockets.map(rockets => (
                  <RocketCard 
                    key={rockets.rocket_id}
                    name={rockets.rocket_id}/>
                  ))}
            </div>
            ) : (
              <h1>Loading Rockets</h1>
            )}
            <hr className="thin-line"></hr>
        </React.Fragment>
        )
    }
}

