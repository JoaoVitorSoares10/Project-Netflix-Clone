import React from 'react';

import './Card.css';

export default function Card(){
    return(
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
    )
}