import React from 'react';

import './IndexFooter.css';

import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function IndexFooter(){
    return(
            <footer className='IndexFooter'>
                <div className='IndexFooter--content'>
                    <div className='IndexFooter--title'>
                        <p>Dúvidas? Ligue 0800-000-0000</p>
                    </div>
                    <div className='Footer--section'>
                        <div className='Footer--sectionItem'>
                            <a href='/'>Perguntas frequentes</a>
                            <a href='/'>Relações com investidores</a>
                            <a href='/'>Informações corporativas</a>
                            <a href='/'>Relações com investidores</a>
                            <a href='/'>Só na Netflix</a>
                            <div class="indexPage--footerDropdown">
                                <button class="indexPage--footerDropdownDropbtn">
                                    <LanguageIcon style={{fontSize: 16}}/>
                                    <p>Português</p> 
                                    <ExpandMoreIcon style={{fontSize: 16}}/>
                                </button>
                                <div class="indexPage--footerDropdownContent">
                                    <a href="/">Português</a>
                                    <a href="/">English</a>
                                </div>
                            </div>
                            <a href='/'>Netflix Brasil</a>
                        </div>
                        <div className='Footer--sectionItem'>
                            <a href='/'>Centro de ajuda</a>
                            <a href='/'>Carreiras</a>
                            <a href='/'>Termos de uso</a>
                            <a href='/'>Entre em contato</a>
                        </div>
                        <div className='Footer--sectionItem'>
                            <a href='/'>Conta</a>
                            <a href='/'>Resgatar cartão pré-pago</a>
                            <a href='/'>Privacidade</a>
                            <a href='/'>Teste de velocidade</a>
                        </div>
                        <div className='Footer--sectionItem'>
                            <a href='/'>Imprensa</a>
                            <a href='/'>Comprar cartão pré-pago</a>
                            <a href='/'>Preferências de cookies</a>
                            <a href='/'>Avisos legais</a>
                        </div>
                    </div>
                </div>
            </footer>
    )
}