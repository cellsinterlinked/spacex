import React, { Component } from 'react'
import RocketList from '../rockets/RocketList'
import './dashboard.css'
import Taskbar from './Taskbar'



    


export default class Dashboard extends Component {
    render() {
        return (
            
                <div className='dash-background' >
                    <Taskbar />
                    <div className="dash-border">
                    
                    <RocketList />
                    </div>
                    
                </div>
            
        )
    }
}