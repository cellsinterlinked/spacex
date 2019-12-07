import React, { Component } from 'react'
import './rocketcard.css'
import {Link} from 'react-router-dom'



export default class RocketCard extends Component {
    state = {
        name: '',
        
    }

    componentDidMount (){
        const name = this.props.name
    
        
        this.setState({
            name: name,
            
        })
    }
    render() {
        return (
          <React.Fragment>
            <Link to={`rockets/${this.state.name}`}>
            <div className="rocket-card" >
                <h1 className="rocket-name">{this.state.name
                    .toLowerCase()
                    .split(' ')
                    .map(
                      s => s.charAt(0).toUpperCase() + s.substring(1)
                      )
                      .join(' ')
                    }</h1>
        
            </div>
          </Link>
          </React.Fragment>
        )
    }
}

