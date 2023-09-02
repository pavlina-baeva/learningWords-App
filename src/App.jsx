import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import List from './components/List/List';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { initialWords } from './components/wordsData.json';
import CardPage from './components/CardPage/CardPage';
import useLocalStorage from './hooks/useLocalStorage';
import EndMessage from './components/EndMessage/EndMessage';

function App() {
  const [words, setWords] = useLocalStorage(initialWords, "words");
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/list"/>} />
          <Route path="/list" element={<List words={words} setWords={setWords} />} />
          <Route path="/cards" element={<CardPage words={words} />} />
          <Route path="/end" element={<EndMessage/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
