import React,{
    Component
} from 'react'
import '../../assets/css/banner.css'
import 'whatwg-fetch'
import { Carousel } from 'antd';
export class Banner extends Component{

    render(){
        return(
            <div className="banner">
                <Carousel autoplay dots="false">
                    <div><img src="http://p1.music.126.net/Rpj-B4RBKDECV7l5uaepZA==/109951163349677585.jpg" alt=""/></div>
                    <div><img src="http://p1.music.126.net/rMqx30eyMw0E9Q5bHo1XYQ==/109951163349162254.jpg" alt=""/></div>
                    <div><img src="http://p1.music.126.net/K-dH2jY4h5b-Gtz2skpTWg==/109951163350926668.jpg" alt=""/></div>
                    <div><img src="http://p1.music.126.net/ZWx2N5Biqqh5o56mjQQldg==/109951163349095465.jpg" alt=""/></div>
                    <div><img src="http://p1.music.126.net/qHNpfHtmmn8WOWTmkEFQeA==/109951163350917357.jpg" alt=""/></div>
            </Carousel>
            </div>
        )
    }
}
