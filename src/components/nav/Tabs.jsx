import React, { Component } from 'react';
import '../../assets/css/tbs.css'
import {NavLink}from 'react-router-dom'

export class Tabs extends Component {
  render() {
    return (
      <div className="Tabs">
       	<NavLink to='/index/home'>时下流行</NavLink>
       	<NavLink to='/index/songlist'>歌单</NavLink>
       	<NavLink to='/index/rank'>排行榜</NavLink>
       	<NavLink to='/index/search'>搜索</NavLink>
      </div>
    );
  }
}
