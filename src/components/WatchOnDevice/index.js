import React from 'react';
import './WatchOnDevice.css';
import Img from '../../assets/device-pile.png';
import Video from '../../assets/video-devices.m4v'

export default function WatchOnDevice(){
    return(
        <div className='indexPage--WatchOnDevice'>
            <div className='WatchOnDevice--watchText'>
                <h1>Assista quando quiser.</h1>
                <h2>Assista no celular, tablet, Smart TV ou <br/>notebook sem pagar a mais por isso.</h2>
            </div>
            <div className='WatchOnDevice--watchAnimation'>
                <div className='WatchOnDevice--watchAnimationImg'>
                    <img alt="tv" src={Img}></img>
                </div>
                <div className='WatchOnDevice--watchAnimationVideo'>
                    <video width="350" autoPlay loop muted>
                        <source src={Video} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    )
}