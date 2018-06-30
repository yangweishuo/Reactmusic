import React, { Component } from 'react';
import '../../../assets/css/tab4.css'
import {Tabs} from '../../nav/Tabs'
import {Header} from "../../header/Header";
import {Link} from "react-router-dom";
export class Tab4 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: [],
            str: "",
            num:1,
            author:""
        }
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <Tabs></Tabs>
                <div className="searchs">
                    <input type="text" ref="name" placeholder="请输入要搜索的歌曲名或歌手" onChange={() => {
                        if (this.refs.name.value !== "") {
                            this.refs.show.style.display = "block"
                            this.refs.shows.style.display = "block"
                            var url = `http://39.108.8.219:3000/search?keywords=${this.refs.name.value}&limit=100`
                            fetch(url).then((res) => {
                                return res.json()
                            }).then((res) => {
                                console.log(res)
                                    this.setState({
                                        arr: res.result.songs,
                                        num: res.result.songCount,
                                        str: this.refs.name.value
                                    })

                            })
                        } else {
                            this.refs.show.style.display = "none"
                            this.refs.shows.style.display = "none"
                        }

                    }}/>
                </div>
                <div className='section'>
                    <div className="stitle" ref="show" style={{display: "none"}}>
                        <h1>搜索:“{this.state.str}”</h1>
                    </div>
                    <div className="listss" ref="shows" style={{display: "none"}}>
                        <ul>
                            {
                                !this.state.num>0?<li>没有找到该歌曲</li>:this.state.arr.map((ele, index) => {
                                    return (
                                        <li key={index} onClick={
                                            (e)=>{
                                                // console.log(ele)
                                                var obj={
                                                    id:ele.id,
                                                    name:ele.name,
                                                    picUrl:ele.album.blurPicUrl

                                                }
                                                window.localStorage.setItem("obj",JSON.stringify(obj))
                                            }
                                        }>
                                            <div className="l_num"></div>
                                            <Link to={`/index/playmusic/${ele.id}`}>
                                                <div className="l_title">
                                                    {ele.name}
                                                </div>
                                            </Link>
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
 }


