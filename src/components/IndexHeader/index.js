import React from 'react';

import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './IndexHeader.css';

export default function IndexHeader(){
    return(
        <header className='indexPage--header'>
            <img alt="Netflix logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"></img>
            <div className='indexPage--headerButton'>                   
                <div class="indexPage--headerDropdown">
                    <button class="indexPage--headerDropdownDropbtn">
                        <LanguageIcon style={{fontSize: 16}}/>
                        <p>Português</p> 
                        <ExpandMoreIcon style={{fontSize: 16}}/>
                    </button>
                    <div class="indexPage--headerDropdownContent">
                        <a href="/">Português</a>
                        <a href="/">English</a>
                    </div>
                </div>
                <div className='indexPage--headerEnter'>
                    <a href='/'>Entrar</a>
                </div>
            </div> 
        </header>
    )
}