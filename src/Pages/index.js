import React from 'react';
import '../Style/index.css';

import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function Index(){
    return(
        <div className='indexPage'>
            <div className='indexPage--header'>
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
            </div>
            <div className='indexPage--card'>
                <div className='indexPage--cardTransparency'>
                    <div className='indexPage--cardTransparencyTop'></div>
                    <div className='indexPage--cardInfo'>
                        <div className='indexPage--cardInfoText'>
                            <h1>Filmes, series e muito mais.<br/> Sem limites.</h1>
                            <h2>Assista onde quiser. Cancele quando quiser.</h2>
                            <h3>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</h3>
                        </div>
                        <div className='indexPage--cardInfoForm'>
                            <input type="text" placeholder='Email'></input>
                            <a href='/'>Vamos lá {'>'}</a>
                        </div>
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