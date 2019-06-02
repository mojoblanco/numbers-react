import React, { useState } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import ResultView from './components/ResultView';

function App() {
  const [ result, setResult ] = useState({});
  
  return (
    <div className="App">
      <h1 className="title">Random number lookup</h1>

      <SearchForm setData={setResult}/>

      <ResultView result={result} /> 
    </div>
  );
}

export default App;
