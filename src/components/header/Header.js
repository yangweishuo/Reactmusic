import React, { Component } from 'react';

import '../../assets/css/App.css'
import '../../assets/css/header.css'
import {Link} from 'react-router-dom'
import {Icon} from 'antd'
export  class Header extends Component{
    render(){
        return(
            <div className="header">
                <h1>星空音乐</h1>
                <div className="search"><Link to="/search"><Icon type="search"></Icon></Link></div>
            </div>
        )
    }
}
