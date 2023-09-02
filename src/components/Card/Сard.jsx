import React, { useState } from 'react';
import './css/Card.css';
import cardLogo from './cardLogo.png';

function Card(props) {
    const { word, nextCard, addKnownWords } = props;
    const [translation, setTranslation] = useState(false);

    function showTranslation() {
        setTranslation(true);
        }
    
    function renderButtonOrTranslation() {
        if (translation) {
            return <div className='card__russian'>{word.russian}</div>
        } else {
            return <button className='unknownBtn' onClick={showTranslation}>Показать перевод</button>
        }
    }

    function onNextCard() {
        if (!translation) {
            addKnownWords();
        }
        setTranslation(false);
        nextCard();
    }

    return (
        <div className='card'>
            <div className='card__container'>
                <img className='card__logo' src={cardLogo} alt='card logo'></img>
                <div className='card__english'>{word.english}</div>
                <div className='card__transcription'>{word.transcription}</div>
                {renderButtonOrTranslation()}
            </div>
                <button className='knownBtn' onClick={onNextCard}>
                    {translation ? 'Следующее слово' : 'Знаю'}
                </button>
        </div>
    )
}

export default Card;