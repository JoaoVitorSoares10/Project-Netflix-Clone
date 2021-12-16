import React from 'react';

import Card from '../components/Card';
import IndexHeader from '../components/IndexHeader';
import KidsProfile from '../components/KidsProfile';
import WatchOnDevice from '../components/WatchOnDevice';
import Watch from '../components/Watch';
import WatchAndDownload from '../components/WatchAndDownload';

import '../Style/index.css';

export default function Index(){
    return(
        <div className='indexPage'>
            <IndexHeader />
            <Card />
            <Watch />
            <WatchAndDownload />
            <WatchOnDevice />
            <KidsProfile />
            <div className='indexPage--commonQuestions'></div>
            <div className='indexPage--footer'></div>
        </div>
    )
}