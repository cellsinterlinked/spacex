import React, { Component } from 'react'
import './taskbar.css'
import { FaBars} from 'react-icons/fa'


export default class Taskbar extends Component {
    render() {
        return (
            <div>

            <div className="taskbar-container">
            <div className="menu-button">
                <hr className="line"></hr>
                <hr className="line"></hr>
                <hr className="line"></hr>

            </div>
                <h1 className="space-x">SPACEX</h1>
            </div>
            </div>
        )
    }
}

