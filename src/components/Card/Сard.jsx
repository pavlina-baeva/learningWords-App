import React from 'react';
import './css/Card.css';

function Card(props) {

    return (
        <div className='card'>
            <div className='card__container'>
                <div className='card__word'>{props.english}</div>
                <div className='card__transcription'>{props.transcription}</div>
                <div className='card__meaning'>{props.russian}</div>
            </div>
            <button>Знаю</button>
            <button>Показать перевод</button>
        </div>
    )
}

export default Card;