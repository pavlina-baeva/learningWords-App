import React, { useState } from 'react';
import Card from '../Card/Сard';
import EndMessage from '../EndMessage/EndMessage';

function CardPage(props) {
    const { words } = props;
    const [cardIndex, setCardIndex] = useState(0);
    const [knownWords, setKnownWords] = useState([]);
    const noCardsLeft = cardIndex >= words.length;

    function addKnownWords(word) {
        setKnownWords([...knownWords, word]);
    }

    function nextCard() {
        if (!noCardsLeft) {
            setCardIndex(cardIndex + 1);
        } 
    }

    if (noCardsLeft) {
        return (
            <EndMessage 
            words={words.length}
            knownWords={knownWords.length}
            />
        )
    }

    return (
        <Card 
        word={words[cardIndex]}
        nextCard={nextCard}
        addKnownWords={addKnownWords}
        />
    )
}

export default CardPage;