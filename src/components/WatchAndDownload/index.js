import React from 'react';
import './WatchAndDownload.css';
import img from '../../assets/mobile-0819.jpg';

export default function WatchAndDownload(){
    return(
        <div className='indexPage--watchAndDownload'>
            <div className='watchAndDownload--watchAnimation'>
                <div className='watchAndDownload--watchAnimationImg'>
                    <img alt="tv" src={img}></img>
                </div>
            </div>
            <div className='watchAndDownload--watchText'>
                <h1>Baixe séries para<br/> assistir offline.</h1>
                <h2>Salve seus títulos favoritos e sempre tenha <br/>algo para assistir.</h2>
            </div>
        </div>
    )
}