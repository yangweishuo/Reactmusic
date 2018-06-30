import React, { Component } from 'react';
import "../../../assets/css/tab2.css"
import {Tabs} from '../../nav/Tabs'
import {Header} from "../../header/Header";
import {Link} from 'react-router-dom'

import {Banner} from "../../banner/Banner2";
export class Tab3 extends Component {
    constructor(props){
        super(props)
        this.state= {
            arr: []
        }
    }
    componentWillMount(){
        var url="http://39.108.8.219:3000/top/list?idx=1"
        fetch(url).then((res)=>{
            return res.json()
        }).then((res)=>{
            console.log(res)
            this.setState({
                arr:res.playlist.tracks
            })
        })
    }
    render() {
        return (
            <div className="App">
                <Header/>
                <Tabs></Tabs>
                <Banner/>
                <div className="lists">
                    <ul>
                        {
                            this.state.arr.map((ele,index)=>{
                                return(
                                    <li key={index} onClick={
                                        (e)=>{
                                            console.log(ele)
                                            var obj={
                                                id:ele.id,
                                                name:ele.al.name,
                                                picUrl:ele.al.picUrl
                                            }
                                            // id:39592096
                                            // name:"那是你离开了北京的生活"
                                            // pic:109951163338145800
                                            // picUrl:"http://p1.music.126.net/xQqZ8LRCg4zrY5HGarKQNw==/109951163338145785.jpg"
                                            // pic_str:"109951163338145785"

                                            window.localStorage.setItem('obj',JSON.stringify(obj))
                                        }
                                    }>
                                        <div className="l_num">{index+1}</div>
                                        <Link to={`/index/Pplaymusic/${ele.id}`}>
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
        );
    }
}

