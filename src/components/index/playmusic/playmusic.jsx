import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {Icon} from 'antd'
import '../../../assets/css/playmusic.css'
export class Playmusic extends Component {
    constructor(props){
        super(props)
        this.state= {
            newarr:[],
            str:"",
            lcy:""
        }
    }
    getLcy=()=>{
        var url=`http://39.108.8.219:3000/lyric?id=${this.props.match.params.id}`
        fetch(url).then((res)=>{
            return res.json()
        }).then((res)=>{
            console.log(res)
            this.setState({
                lcy:res.lrc.lyric
            })
            console.log(this.state.lcy)
        })

    }
    componentWillMount(){
        var url=`http://39.108.8.219:3000/music/url?id=${this.props.match.params.id}`
        fetch(url).then((res)=>{
            return res.json()
        }).then((res)=>{
            this.setState({
                str:res.data[0].url,
            })
        })
        this.getLcy()
        var str=window.localStorage.getItem("obj")
        // console.log(JSON.parse(str))
        var newstr=JSON.parse(str)
        this.state.newarr.push(newstr)
        // console.log(this.state.newarr)

    }
  render() {
    return (
      <div className="App">
          <div className="t_t">
              <div className="t_ttop">
                  <Link to="/"><Icon type="arrow-left" /></Link>
                  <h1>{this.state.newarr[0].name}</h1>
              </div>
          </div>

        <div className='psection'>
            <div className="main">
                <div className="s_bg">
                    <div className="top" style={{backgroundImage:`url(${this.state.newarr[0].picUrl})`}}>
                    </div>
                </div>

                <div className="centers"  ref="strop" style={{backgroundImage:"url(https://s3.music.126.net/m/s/img/disc_default.png?7c9b3adc16f5485c2bfbe8a540534188)"}}></div>
                <div className="center"  style={{backgroundImage:`url(${this.state.newarr[0].picUrl})`}}>
                </div>
                </div>
            <div className="lcy"></div>
            <audio src={this.state.str} ref="stops" autoPlay controls></audio>
        </div>
        
      </div>
    );
  }
}
