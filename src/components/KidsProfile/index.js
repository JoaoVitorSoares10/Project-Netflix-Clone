import React from 'react';
import './KidsProfile.css';
import Img from '../../assets/kidsImg.png';

export default function KidsProfile(){
    return(
        <div className='indexPage--kidsProfile'>
            <div className='kidsProfile--watchAnimation'>
                <img alt="tv" src={Img}></img>
            </div>
            <div className='kidsProfile--watchText'>
                <h1>Crie perfis para crianças.</h1>
                <h2>Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso.</h2>
            </div>
        </div>
    )
}