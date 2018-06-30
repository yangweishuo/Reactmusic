import React, { Component } from 'react';
import "../../../assets/css/tab2.css"
import {Tabs} from '../../nav/Tabs'
import {Header} from "../../header/Header";
import {Link} from 'react-router-dom'
export class Tab2 extends Component {
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
          <div className="title">
              <h1>全部歌单</h1>
          </div>
        <div className='section2'>
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
