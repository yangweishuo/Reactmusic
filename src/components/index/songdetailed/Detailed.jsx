import React, { Component } from 'react';
import '../../../assets/css/Detailed.css'
import {Link} from 'react-router-dom'
import {Icon} from 'antd'
export class Detailed extends Component{
    constructor(props){
        super(props)
        this.state= {
            arr: [],
            str:""
        }
    //     console.log(this.props.match.params.id)
    }
    componentWillMount(){

        var url=`http://39.108.8.219:3000/playlist/detail?id=${this.props.match.params.id}`
        fetch(url).then((res)=>{
            return res.json()
        }).then((res)=>{
            console.log(res)
            this.setState({
                str:res.result
            })
        })
    }
  render() {
    return (
      <div className="App">
          <div className='sections' >
              <div className="s_bg">
                  <div className="top" style={{backgroundImage:`url(${this.state.str.coverImgUrl})`}}>
                  </div>
              </div>

              <div className="t_t" >
                  <div className="t_ttop">
                      <Link to="/index/songlist"><Icon type="arrow-left" /></Link>
                      <h1>歌单</h1>
                  </div>
                  <div className="t_tbottom">
                      <div className="t_img"><img src={this.state.str.coverImgUrl} alt=""/></div>
                      <div className="t_name">
                          <p>{this.state.str.name}</p>
                          <p>标签：{this.state.str.tags}</p>
                          </div>
                  </div>
              </div>
              <div className="title">
                  <Icon type="plus-circle-o" /><h3>全部播放</h3>
              </div>
        <div className="list">
            <ul>
                {
                    this.state.arr.map((ele,index)=>{
                        return(
                           <li key={index} onClick={
                               (e)=>{
                                   console.log(ele)
                                   // id:39592096
                                   // name:"那是你离开了北京的生活"
                                   // pic:109951163338145800
                                   // picUrl:"http://p1.music.126.net/xQqZ8LRCg4zrY5HGarKQNw==/109951163338145785.jpg"
                                   // pic_str:"109951163338145785"
                                   var obj={
                                       id:ele.id,
                                       name:ele.name,
                                       picUrl:ele.album.blurPicUrl

                                   }
                                   console.log(ele.album.blurPicUrl)
                                  window.localStorage.setItem("obj",JSON.stringify(obj))
                               }
                           }>
                               <div className="l_num">{index+1}</div>
                               <Link to={`/index/playmusic/${ele.id}`}>
                                   <div className="l_title">
                                   {ele.name}
                                   </div></Link>
                           </li>
                        )
                    })
                }
            </ul>
        </div>
        </div>
      </div>
    );
  }
    componentDidMount(){

        var url=`http://39.108.8.219:3000/playlist/detail?id=${this.props.match.params.id}`
        fetch(url).then((res)=>{
            return res.json()
        }).then((res)=>{
            this.setState({
                arr:res.result.tracks,
            })
        })
    }
}
