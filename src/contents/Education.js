import React, {Component} from 'react';
import Widecard from '../components/Widecard';

class Education extends Component{
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="M.S Information Systems" where="Northeastern University Boston" from="2013" to="2015"/>
            <Widecard title="B.Tech Software Engineering" where="Jabalpur Engineering College" from="July 2007" to="July 2011"/>
            </div>        )
    }
}

export default Education;