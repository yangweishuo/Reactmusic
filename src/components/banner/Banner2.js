import React,{
    Component
} from 'react'
import '../../assets/css/banner.css'
import 'whatwg-fetch'
import pic from '../../assets/imgs/11111.png'
import { Carousel } from 'antd';
export class Banner extends Component{

    render(){
        return(
            <div className="banner">
                <Carousel dots="false">
                    <div><img src={pic} alt=""/></div>
            </Carousel>
            </div>
        )
    }
}
