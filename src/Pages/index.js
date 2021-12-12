import React from 'react';
import '../Style/index.css';

export default function Index(){
    return(
        <div className='indexPage'>
            <div className='indexPage--header'></div>
            <div className='indexPage--card'>
                <div className='indexPage--cardTransparency'>
                    <div className='indexPage--cardTransparencyTop'>
                        <div className='indexPage--cardTransparencyBottom'></div>
                    </div>
                </div>
            </div>
            <div className='indexPage--watch'></div>
            <div className='indexPage--watchAndDownload'></div>
            <div className='indexPage--kidsProfile'></div>
            <div className='indexPage--commonQuestions'></div>
            <div className='indexPage--footer'></div>
        </div>
    )
}