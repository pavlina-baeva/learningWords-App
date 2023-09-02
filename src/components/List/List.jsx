import React, { useState } from 'react';
import './css/List.css';
import Input from '../Input/Input';
import binLogo from './binLogo.png';


function List(props) {
    const { words, setWords } = props;
    const [newWord, setNewWord] = useState('');
    const [newTranscription, setNewTranscription] = useState('');
    const [newRussian, setNewRussian] = useState('');

    function addWord() {
        if (!newWord) {
            setNewWord(null);
            return;
        } 
        const newWords = [...words];
        newWords.push({
            english: newWord,
            transcription: newTranscription,
            russian: newRussian
        });
        setWords(newWords);
        setNewWord('');
        setNewTranscription('');
        setNewRussian('');
    }

    return (
        <div className="wordList">
            <h1>Список слов</h1>
            <table>
                <thead>
                    <th>Слово</th>
                    <th>Транскрипция</th>
                    <th>Перевод</th>
                    <th></th>
                </thead>
                <tbody>
                    {
                        words.map((word) =>
                            <tr>
                                <td>{word.english}</td>
                                <td>{word.transcription}</td>
                                <td>{word.russian}</td>
                                <td><button className='deleteBtn'><img className='binLogo' src={binLogo}/></button></td>
                            </tr>)
                    }
                    <tr>
                        <td><Input value={newWord} errorMessage={newWord !== null ? '' : 'Заполните поле'} setValue={(e) => setNewWord(e.target.value)}></Input></td>
                        <td><Input value={newTranscription} errorMessage={newTranscription !== null ? '' : 'Заполните поле'} setValue={(e) => setNewTranscription(e.target.value)}></Input></td>
                        <td><Input value={newRussian} errorMessage={newRussian !== null ? '' : 'Заполните поле'} setValue={(e) => setNewRussian(e.target.value)}></Input></td>
                        <td>
                            <button className="addBtn" onClick={addWord}>Добавить</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button className="startBtn" onClick={() => window.location.href="/cards"}>Начать учить</button>
        </div>
    )
}

export default List;

function setNewValue(arg0) {
    throw new Error('Function not implemented.');
}
