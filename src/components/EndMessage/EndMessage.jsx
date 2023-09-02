import React from 'react';
import './css/EndMessage.css';
import endLogo from './endLogo.png';

function EndMessage(props) {
    const {words, knownWords} = props;
    const learnedWords = words - knownWords;
    return (
        <div className='endMessage'>
            <img className='endMessage__logo' src={endLogo}/>
            <div className='endMessage__text'>Слова закончились! Вы знаете {knownWords} слов, новых слов изучено {learnedWords}</div>
            <button className='endMessage__btn' onClick={() => window.location.href="/list"}>Вернуться к списку слов</button>    
        </div>
        
    )
}

export default EndMessage;