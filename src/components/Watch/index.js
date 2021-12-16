import React from 'react';
import './Watch.css';
import TvImg from '../../assets/tv.png';
import TvVideo from '../../assets/video-tv-0819.mp4'

export default function Watch(){
    return(
        <div className='indexPage--watch'>
            <div className='indexPage--watchText'>
                <h1>Aproveite na TV.</h1>
                <h2>Assista em Smart TVs, PlayStation, Xbox,<br/>Chromecast, Apple TV, aparelhos de Blu-ray e <br/>outros dispositivos.</h2>
            </div>
            <div className='indexPage--watchAnimation'>
                <div className='indexPage--watchAnimationImg'>
                    <img alt="tv" src={TvImg}></img>
                </div>
                <div className='indexPage--watchAnimationVideo'>
                    <video width="400" autoPlay loop muted>
                        <source src={TvVideo} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    )
}