import React, { Component } from 'react'
import './rocketinfo.css'
import Axios from 'axios'

export default class RocketInfo extends Component {
    state = {
        rocketName: '',
        active: '',
        stages: '',
        cost: '',
        firstFlight: '',
        height: '',
        weight: '',
        diameter: '',
        successRate: '',
        engineNum: '',
        engineType: '',
        imageUrl: '',
}

async componentDidMount() {
    const { name } = this.props.match.params  // references "name" from the url we referenced in app.js
    
    // Url for rocket information
    
    const rocketUrl = `https://api.spacexdata.com/v3/rockets/${name}/`

    // Get rocket information

    const rocketRes = await Axios.get(rocketUrl);
    
    const rocketName = rocketRes.data.rocket_name
    const active = rocketRes.data.active
    const stages = rocketRes.data.stages
    const cost = rocketRes.data.cost_per_launch
    const firstFlight = rocketRes.data.first_flight
    const height = rocketRes.data.height.meters
    const weight = rocketRes.data.mass.kg
    const diameter = rocketRes.data.diameter.meters
    const successRate = rocketRes.data.success_rate_pct
    const engineNum = rocketRes.data.engines.number
    const engineType = rocketRes.data.engines.type
    const imageUrl = rocketRes.data.flickr_images[0]
    
    
    
    
    
    
    
    this.setState({ 
        rocketName,
        active,
        stages,
        cost,
        firstFlight,
        height,
        weight,
        diameter,
        successRate,
        engineNum,
        engineType,
        imageUrl

         })

}
    render() {
        return (
            <div className="rocket-background">
                <div className="border-box">
                <h1 className="rocket-name">{this.state.rocketName}</h1>
                <hr className="divide" />
                <div className="statBox">
                {this.state.active ? (
                  <p>Active: Yes</p>
                  ) : <p>Active: No</p> }
                  <p>Stages: {this.state.stages}</p>
                  <p>Cost (per launch): ${this.state.cost}</p>
                  <p>First Flight: {this.state.firstFlight}</p>
                  <p>Height: {this.state.height}meters</p>
                  <p>Weight: {this.state.weight}kg</p>
                  <p>Diameter: {this.state.diameter}meters</p>
                  <p>Success Rate: {this.state.successRate}</p>
                  <p>Number of Engines: {this.state.engineNum}</p>
                  <p>Engine Type: {this.state.engineType}</p>
                
                </div>
                <div className="image-container">
                <img className="rocket-pic" src={this.state.imageUrl} />
                </div>
                <hr className="divide" />
                </div>
            </div>
        )
    }
}

