import React, { useState } from 'react';
import './css/List.css';
import { initialWords } from '../wordsData.json';

function List() {
    const [words, setWords] = useState(initialWords);
    const [newWord, setNewWord] = useState('');
    const [newTranscription, setNewTranscription] = useState('');
    const [newRussian, setNewRussian] = useState('');

    function addWord() {
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
                                <td></td>
                            </tr>)
                    }
                    <tr>
                        <td><input value={newWord} onChange={(e) => setNewWord(e.target.value)}></input></td>
                        <td><input value={newTranscription} onChange={(e) => setNewTranscription(e.target.value)}></input></td>
                        <td><input value={newRussian} onChange={(e) => setNewRussian(e.target.value)}></input></td>
                        <td>
                            <button className="addBtn" onClick={addWord}>Добавить</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button className="startBtn">Начать учить</button>
        </div>
    )
}

export default List;