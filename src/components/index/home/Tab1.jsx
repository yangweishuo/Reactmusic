import React, { Component } from 'react';
import "../../../assets/css/tab1.css"
import {Tabs} from '../../nav/Tabs'
import {Link} from 'react-router-dom'
import {Header} from "../../header/Header";
import {Banner} from "../../banner/Banner";
import {Icon } from 'antd'
import 'whatwg-fetch'
export class Tab1 extends Component {
    constructor(props){
        super(props)
        this.state= {
            arr: []
        }

    }
    componentWillMount(){
        var url="http://39.108.8.219:3000/personalized"
        fetch(url).then((res)=>{
            return res.json()
        }).then((res)=>{
            this.setState({
                arr:res.result
            })
        })
    }
  render() {
    return (
      <div className="App">
          <Header/>
          <Tabs></Tabs>
          <Banner/>
          <div className="title">
              <h1>推荐歌单</h1>
              <div className="gt">
                  <Link to="/songlist"><Icon type="right"></Icon></Link>
              </div>
          </div>

        <div className='section'>
            {
                this.state.arr.map((ele,index)=>{
                return(
                    <dl key={index}>
                        <Link to={`/index/songdetailed/${ele.id}`}><dt><img src={ele.picUrl} alt=""/></dt></Link>
                        <Link to={`/index/songdetailed/${ele.id}`}><dd>{ele.name}</dd></Link>
                    </dl>
                )
                })
            }
        </div>
        
      </div>
    );
  }
}
